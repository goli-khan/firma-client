import { useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useCustomForm } from "../Context/FormFlow";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";

const NewCompany = () => {
	const navigate = useNavigate();
	const { city } = useParams();
	const { currentState, next, prev, updateForm } = useCustomForm();
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			participants: [
				{
					name: "",
					surname: "",
					share: "",
					// frontId: null,
					// backId: null,
					country: "usa",
					state: city,
					address: "",
					city: "",
					zipCode: "",
				},
			],
		},
	});
	const handleNext = async () => {
		const isStepValid = await methods.trigger();
		if (!isStepValid) return;

		const value = methods.getValues();
		updateForm(value);

		if (currentState < 3) next();
		else methods.handleSubmit(onSubmit)();
	};

	const handleBack = () => {
		if (currentState === 1) {
			navigate(-1);
		} else {
			prev();
		}
	};

	const onSubmit = (data) => {
		updateForm(data);
		if (currentState >= 3) navigate("/review");
	};
	return (
		<>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div>{currentState === 1 && <Step1 />}</div>
					<div>{currentState === 2 && <Step2 />}</div>
					<div>{currentState === 3 && <Step3 />}</div>
					<button type="button" onClick={handleNext}>
						{currentState >= 3 ? <p>Submit</p> : <p>Next</p>}
					</button>
					<button type="button" onClick={handleBack}>
						Back
					</button>
				</form>
			</FormProvider>
		</>
	);
};

export default NewCompany;
