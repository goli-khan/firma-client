import { useFormContext } from "react-hook-form";

const Step1 = () => {
	const { register } = useFormContext();
	return (
		<>
			<p>test</p>
			<input
				{...register("Companyname", {
					required: "Give this compnay a name that you like",
				})}
				type="text"
				placeholder="give this company a main name"
			/>
			<input
				{...register("AlternativeName")}
				type="text"
				placeholder="give this company a main name"
			/>
			<input
				{...register("AlternativeName2")}
				type="text"
				placeholder="give this company a main name"
			/>
		</>
	);
};

export default Step1;
