import { useForm } from "react-hook-form";
import { useCustomForm } from "../Context/FormFlow";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { register, handleSubmit, getValues } = useForm();
	const { formData, updateForm } = useCustomForm();
	const { country } = location.state;
	let value;

	const onSubmit = (data) => {
		if (country === "poland") {
			const { PoData } = location.state;
			value = { country, PoData, data };
			console.log(value);
			navigate("/thank");
		}
		if (country === "usa") {
			const matchedParticipant = formData?.participants?.find(
				(participant) =>
					participant.name.toLowerCase() === data.login_name.toLowerCase(),
			);
			if (matchedParticipant) {
				updateForm(getValues());
				navigate("/billing");
			} else alert("there is no user like this");
		}
		if (country === "other") {
			console.log("other");
			navigate("/thank");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="name" {...register("login_name")} />
				<input
					type="text"
					placeholder="surname"
					{...register("login_surname")}
				/>
				<input type="email" placeholder="email" {...register("login_email")} />
				<input
					type="password"
					placeholder="password"
					{...register("login_password")}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;
