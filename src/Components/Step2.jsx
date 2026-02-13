import { useFieldArray, useFormContext } from "react-hook-form";
const Step2 = ({ onNext, onBack }) => {
	const {
		register,
		control,
		watch,
		formState: { errors },
	} = useFormContext();

	const { fields, remove, append } = useFieldArray({
		control,
		name: "participants",
	});
	const participants = watch("participants");
	let total = 0;

	participants?.forEach((person) => {
		const value = Number(person.share);
		total = total + value;
	});

	return (
		<>
			<div className="flex justify-center items-center h-screen flex-col ">
				<div></div>
				<div>
					<p>Add company Participants</p>
					{fields.map((item, index) => {
						return (
							<div key={item.id}>
								<label> participants {index + 1}</label>
								<input
									{...register(`participants.${index}.name`, {
										required: "Name is a must",
										minLength: {
											value: 3,
											message: "not less then three character",
										},
									})}
									placeholder="name"
									defaultValue={item.name}
								/>
								{errors.participants?.[index]?.name && (
									<p className="text-red-500 text-sm">
										{errors.participants[index].name.message}
									</p>
								)}
								<input
									{...register(`participants.${index}.surname`)}
									placeholder="surname"
									defaultValue={item.surname}
								/>
								<input
									{...register(`participants.${index}.share`, {
										required: true,
										validate: (value) => {
											const currentValue = Number(value) || 0;
											const other =
												total - Number(participants?.[index]?.share) || 0;

											if (other + currentValue > 100) {
												return "over 100";
											} else return true;
										},
									})}
									type="number"
									placeholder="share"
									defaultValue={item.share}
								/>
								{errors.participants?.[index]?.share && (
									<p className="text-red-500 text-sm">
										You must fill this field
									</p>
								)}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-red-500 cursor-pointer"
									fill="currentColor"
									viewBox="0 0 24 24"
									onClick={() => remove(index)}
								>
									<path d="M3 6h18v2H3V6zm2 3h14v13H5V9zm3 3v7h2v-7H8zm4 0v7h2v-7h-2zm4 0v7h2v-7h-2z" />
								</svg>
							</div>
						);
					})}
					<button
						type="button"
						disabled={total >= 100}
						onClick={() => append({ name: "", surname: "", share: "" })}
					>
						{total >= 100 ? "No more then 100%" : "Add participants"}
					</button>
					<div className="flex justify-between mt-6">
						<button type="button" onClick={onBack}>
							Back
						</button>

						<button type="button" onClick={onNext}>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Step2;
