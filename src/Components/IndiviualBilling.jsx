import { useForm, useFormContext } from "react-hook-form";

const IndiviualBilling = () => {
	const { register, handleSubmit } = useFormContext();

	return (
		<>
			<div>
				<p>Person on the invoice</p>
				<input type="text" placeholder="name" {...register("IBill_name")} />
				<input
					type="text"
					placeholder="surname"
					{...register("IBill_surname")}
				/>
			</div>
			<div>
				<p>Billing Address</p>
				<input
					type="text"
					placeholder="Address"
					{...register("IBill_address")}
				/>
				<input type="text" placeholder="City" {...register("IBill_city")} />
				<input type="text" placeholder="Zip Code" {...register("IBill_zip")} />
				<select {...register("IBill_country")}>
					<option value="country">Country</option>
					<option value="usa">Usa</option>
					<option value="poland">Poland</option>
					<option value="other">Others</option>
				</select>
			</div>
			<div>
				<p>Contact Details</p>
				<input type="email" placeholder="Email" {...register("IBill_email")} />
				<input
					type="number"
					placeholder="Phone number"
					{...register("IBill_number")}
				/>
			</div>
		</>
	);
};

export default IndiviualBilling;
