import { useState } from "react";
import { useCustomForm } from "../Context/FormFlow";

const Billing = () => {
	const [billingFor, setBillingFor] = useState("company");
	const { formData } = useCustomForm();
	return (
		<>
			<button onClick={() => setBillingFor("company")}>For Company</button>
			<button onClick={() => setBillingFor("indiviual")}>For indiviual</button>

			{billingFor && billingFor === "company" && <p> {formData.CompanyName}</p>}
			{billingFor && billingFor === "indiviual" && (
				<p>{formData?.login_email}</p>
			)}
		</>
	);
};

export default Billing;
