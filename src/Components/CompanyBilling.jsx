import { useForm } from "react-hook-form";

const CompanyBilling = () => {
	const { register } = useForm();
	return (
		<>
			<div>
				<p>Company on the invoice</p>
				<input
					type="text"
					placeholder="Company name"
					{...register("CBill_name")}
				/>
				<input type="text" placeholder="ICO" {...register("CBill_ico")} />
				<input type="text" placeholder="DIC" {...register("CBill_dic")} />
				<input type="text" placeholder="IC DPH" {...register("CBill_dph")} />
			</div>
			<div>
				<p>Billing Address</p>
				<input
					type="text"
					placeholder="Address"
					{...register("CBill_address")}
				/>
				<input type="text" placeholder="City" {...register("CBill_city")} />
				<input type="text" placeholder="Zip Code" {...register("CBill_zip")} />
				<select {...register("CBill_country")}>
					<option value="country">Country</option>
					<option value="usa">Usa</option>
					<option value="poland">Poland</option>
					<option value="other">Others</option>
				</select>
			</div>
			<div>
				<p>Contact Details</p>
				<input type="email" placeholder="Email" {...register("CBill_email")} />
				<input
					type="number"
					placeholder="Phone number"
					{...register("CBill_number")}
				/>
			</div>
		</>
	);
};

export default CompanyBilling;
