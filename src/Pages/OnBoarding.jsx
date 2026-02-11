import { useNavigate } from "react-router-dom";
import image from "../assets/test_hero.jpg";

const OnBoarding = () => {
	const navigate = useNavigate();

	const toCountry = () => {
		navigate("/country");
	};
	return (
		<div className="flex flex-col md:flex-row items-center justify-evenly h-screen">
			<div className="mx-10">
				<img
					src={image}
					className="w-190 h-80 obejct-cover"
					alt="ther will be an image"
				/>
			</div>
			<div className="w-[62%] mx-10 flex gap-2 flex-col">
				<h1 className=" text-3xl">
					Create a new offshore <br />
					Compnay online
				</h1>
				<p className="text-md">
					Go through our offshore company creation process and start reaping the
					benefits yourself
				</p>

				<div className="p-3 mr-10 bg-[#2b2f38] rounded-xl flex justify-center">
					<button
						onClick={toCountry}
						className="text-sm bg-yellow-400 text-black rounded-xl p-3"
					>
						to go to country selection
					</button>
				</div>
			</div>
		</div>
	);
};

export default OnBoarding;
