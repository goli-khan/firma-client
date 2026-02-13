import { useFormContext } from "react-hook-form";
import { generateMultipleNames } from "../Utils/companyNameGenrator.jsx";
import { useState } from "react";

const Step1 = ({ onNext, onBack }) => {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();

	const handleGenerateNames = () => {
		const [main] = generateMultipleNames(1);

		setValue("CompanyName", main, { shouldValidate: true });
	};

	return (
		<>
			<div className="flex justify-center items-center h-screen gap-5">
				<div className="w-[30%] h-25 border flex justify-center items-center">
					image
				</div>
				<div className="flex flex-col gap-5">
					<p className="text-2xl">Write name of your new Company</p>
					<div className="flex flex-col bg-[#2f2b2e] gap-2 p-9 items-start rounded-lg">
						<input
							{...register("CompanyName", {
								required: "Give this compnay a name that you like",
								minLength: {
									value: 3,
									message: "Company name must be at least 3 characters",
								},
								pattern: {
									value: /^[A-Za-z\s]+$/,
									message: "Only letters and spaces allowed",
								},
							})}
							className="bg-white text-black w-full rounded-md p-2"
							type="text"
							placeholder="Copmany Name"
						/>
						{errors.CompanyName && (
							<p className="text-red-500 text-sm">
								{errors.CompanyName.message}
							</p>
						)}
						<span
							className="text-sm  text-yellow-500 hover:text-yellow-700 pb-4 underline hover:cursor-pointer"
							type="button"
							onClick={handleGenerateNames}
						>
							Generate Random Names
						</span>
						<input
							{...register("alternativeName1")}
							type="text"
							className="bg-white text-black w-full rounded-md p-2"
							placeholder="Alternative Name "
						/>
						<input
							{...register("alternativeName2")}
							type="text"
							className="bg-white text-black w-full rounded-md p-2"
							placeholder="Alternative Name "
						/>
					</div>

					<div className="flex justify-end gap-5">
						<button type="button" onClick={onBack}>
							Back
						</button>

						<button
							type="button"
							onClick={onNext}
							className="bg-yellow-500 text-black py-2 px-5 rounded-md"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Step1;
