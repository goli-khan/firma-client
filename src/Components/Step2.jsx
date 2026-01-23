import { useFieldArray, useFormContext } from "react-hook-form";
const Step2 = () => {
	const { register, control, watch } = useFormContext();

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
			<p>Add company Participants</p>
			{fields.map((item, index) => {
				return (
					<div key={item.id}>
						<label> participants {index + 1}</label>
						<input
							{...register(`participants.${index}.name`)}
							placeholder="name"
							defaultValue={item.name}
						/>
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
						<button type="button" onClick={() => remove(index)}>
							Remove
						</button>
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
		</>
	);
};

export default Step2;
