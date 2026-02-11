import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Country = () => {
	const navigate = useNavigate();
	const [Country, setCountry] = useState("");

	const handleSubmit = (e) => {
		const value = e.target.value;
		setCountry(value.toLowerCase());
	};
	const handleNext = () => {
		if (Country === "usa" || Country === "poland") navigate(`/${Country}`);
		if (Country === "other")
			navigate("/login", { state: { country: "other" } });
	};

	return (
		<div className="flex justify-center h-screen items-center gap-10">
			<div className="w-90 h-90">image</div>
			<div className="">
				<div className="text-[22px] pb-3">Select Country of incorporation</div>
				<div className="bg-[#2b2f2e] p-3 mb-3">
					<select
						value={Country}
						className="bg-white text-black text-sm p-1 w-full"
						onChange={handleSubmit}
					>
						<option value="">Choose from option </option>
						<option value="usa">Usa </option>
						<option value="poland">Poland </option>
						<option value="other">Others </option>
					</select>
				</div>
				<div className="flex flex-row justify-end gap-4">
					<button
						className=""
						onClick={() => {
							navigate(-1);
						}}
					>
						Back
					</button>
					<button
						className="bg-yellow-500 px-3 py-1 rounded-md text-black disabled:opacity-40 disabled:cursor-not-allowed"
						onClick={handleNext}
						disabled={!Country}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Country;
