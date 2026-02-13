import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sulzby from "../Components/Sulzby.jsx";
import Info from "../Components/Info.jsx";

const Usa = () => {
	const navigate = useNavigate();
	const [side, setSide] = useState("sulzby");
	const [Country, setCountry] = useState("usa" || "");
	const [City, setCity] = useState("");

	const handleCountry = (e) => {
		const value = e.target.value;
		setCountry(value);
	};

	const handleCity = (e) => {
		const value = e.target.value;
		setCity(value);
	};

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="w-[40%]">
					<button
						className={`
      p-2 rounded-tr-3xl mr-1 transition-colors duration-200
      ${side === "sulzby"
								? "bg-white text-black" // active = prominent (white)
								: "bg-[#4b4f4d] text-gray-300"
							} // inactive = muted/darker
    `}
						onClick={() => setSide("sulzby")}
					>
						Obsah Sulzby
					</button>
					<button
						className={`
      p-2 rounded-tr-3xl transition-colors duration-200
      ${side === "info"
								? "bg-white text-black" // active = prominent (white)
								: "bg-[#4b4f4d] text-gray-300"
							} // inactive = muted
    `}
						onClick={() => setSide("info")}
					>
						Viac Info
					</button>
					{side === "sulzby" ? <Sulzby /> : <Info />}
				</div>
				<div className="flex flex-col justify-center items-center w-[30%]">
					<div className="bg-[#2b2f2e]	p-3 w-[80%] rounded-3xl">
						<div className="bg-white text-black p-2 my-4 rounded-3xl">
							<select
								value={Country}
								className="w-full"
								onChange={handleCountry}
							>
								<option value="choose">Select and opiotn</option>
								<option value="usa">Usa</option>
								<option value="poland">poland</option>
								<option value="other">Others</option>
							</select>
						</div>
						{Country === "usa" && (
							<div className="bg-white text-black p-2 mb-4 rounded-3xl">
								<select value={City} className="w-full" onChange={handleCity}>
									<option value="">Select an option</option>
									<option value="wioming">Wioming</option>
									<option value="delaware">Delaware</option>
								</select>
							</div>
						)}
					</div>

					<div className="my-4 flex gap-4 justify-end ">
						<button
							className=""
							onClick={() => {
								navigate(-1);
							}}
						>
							Back
						</button>
						<button
							className="bg-yellow-400 text-black px-5 py-2 rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
							disabled={!City}
							onClick={() => {
								Country ? navigate(`/ ${Country} / ${City}  `) : navigate(`/*`);
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Usa;
