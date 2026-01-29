import { useState } from "react";
import { useCustomForm } from "../Context/FormFlow";
import { FormProvider, useForm } from "react-hook-form";
import CompanyBilling from "../Components/CompanyBilling";
import IndiviualBilling from "../Components/IndiviualBilling";

const Billing = () => {
	const [billingFor, setBillingFor] = useState("company");
	const methods = useForm();
	const { formData, updateForm } = useCustomForm();
	const onSubmit = (data) => {
		updateForm({ ...data, billingType: billingFor });
		console.log("done");
	};

	return (
		<>
			<button onClick={() => setBillingFor("company")}>For Company</button>
			<button onClick={() => setBillingFor("indiviual")}>For indiviual</button>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					{billingFor && billingFor === "company" && <CompanyBilling />}
					{billingFor && billingFor === "indiviual" && <IndiviualBilling />}
					<button type="submit">Compelete</button>
				</form>
			</FormProvider>
		</>
	);
};

export default Billing;
