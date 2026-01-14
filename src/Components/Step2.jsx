import { useFieldArray, useFormContext } from "react-hook-form";
const Step2 = () => {
	const { register, control } = useFormContext();

	const { fields, remove, append } = useFieldArray({
		control,
		name: "participants",
	});

	return (
		<>
			<p>Add company Participants</p>
			{fields.map((item, index) => {
				return (
					<div key={item.id}>
						<label> participants {index + 1}</label>
						<input
							{...register(`participants[${index}].name`)}
							placeholder="name"
							defaultValue={item.name}
						/>
						<input
							{...register(`participants[${index}].surname`)}
							placeholder="surname"
							defaultValue={item.surname}
						/>
						<input
							{...register(`participants[${index}].share`)}
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
				onClick={() => append({ name: "", surname: "", share: "" })}
			>
				Add participants{" "}
			</button>
		</>
	);
};

export default Step2;
