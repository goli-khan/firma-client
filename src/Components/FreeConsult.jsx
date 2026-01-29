import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FreeConsult = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		navigate("/login", { state: { PoData: data, country: "poland" } });
	};
	return (
		<>
			<div>
				You get a free Counsultation with an expert in establishing companies in
				poland
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Name" {...register("consult_name")} />
				<input
					type="text"
					placeholder="Surname"
					{...register("consult_surname")}
				/>
				<input
					type="email"
					placeholder="Email"
					{...register("consult_email")}
				/>
				<input type="tel" placeholder="Phone" {...register("consult_phone")} />
				<button>Send</button>
			</form>
			<button onClick={() => navigate(-1)}>Back</button>
		</>
	);
};

export default FreeConsult;
