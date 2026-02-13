import { useState } from "react";
import { useFormContext } from "react-hook-form";

const Step3 = ({ onNext, onBack, isLastStep }) => {
	const { register, watch } = useFormContext();
	const isSkipped = watch("skipDocu");
	const participants = watch("participants");

	return (
		<>
			<div>
				{participants.map((p, index) => (
					<div key={index}>
						{p.name} {p.surname} — Share: {p.share}
						<input
							type="text"
							placeholder="address"
							{...register(`participants.${index}.address`)}
						/>
						<input
							type="text"
							placeholder="city"
							{...register(`participants.${index}.city`)}
						/>
						<input
							type="number"
							placeholder="zipCode"
							{...register(`participants.${index}.zipCode`)}
						/>
						<select value={participants.country} disabled>
							<option value="usa">Usa</option>
						</select>
						{!isSkipped && (
							<>
								<input
									type="file"
									{...register(`participants.${index}.frontId`)}
								/>
								<input
									type="file"
									{...register(`participants.${index}.backId`)}
								/>
							</>
						)}
					</div>
				))}
			</div>
			<label>
				<input type="checkbox" {...register("skipDocu")} />
				Upload id later
			</label>
			<button type="button" onClick={onBack}>
				Back
			</button>
			<button type="button" onClick={onNext}>
				{isLastStep ? "Submit" : "Next"}
			</button>
		</>
	);
};

export default Step3;
