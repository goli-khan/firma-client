import { useForm } from "react-hook-form";
import { useCustomForm } from "../Context/FormFlow";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, getValues } = useForm();
	const { formData, updateForm } = useCustomForm();

	const onSubmit = (data) => {
		const matchedParticipant = formData?.participants?.find(
			(participant) =>
				participant.name.toLowerCase() === data.login_name.toLowerCase(),
		);
		if (matchedParticipant) {
			updateForm(getValues());
			navigate("/billing");
		} else alert("there is no user like this");
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
