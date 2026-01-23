import { useContext, useState } from "react";
import { createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const [currentState, setCurrentState] = useState(1);

	const [formData, setFormData] = useState({
		CompanyName: "",
		alternativeName1: "",
		alternativeName2: "",
		participants: [],
		login_name: "",
		login_surname: "",
		login_email: "",
		login_password: "",
	});

	const next = () => {
		setCurrentState((prev) => {
			return prev + 1;
		});
	};

	const prev = () => {
		setCurrentState((prev) => {
			return prev - 1;
		});
	};

	const updateForm = (data) => {
		setFormData((prev) => ({
			...prev,
			...data,
		}));
		console.log(formData);
	};

	const value = { currentState, next, prev, updateForm, formData };
	return <FormContext.Provider value={value}>{children} </FormContext.Provider>;
};

export const useCustomForm = () => {
	const context = useContext(FormContext);
	if (!context) throw new Error("there is no context");
	return context;
};
