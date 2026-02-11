import { useState } from "react";

const Sulzby = () => {
	const value = 85.8;
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckbox = (e) => {
		setIsChecked(e.target.checked);
	};
	return (
		<>
			<div className="flex flex-col ">
				<div className="bg-[#2b2f2e] p-4 border-b border-black ">
					<ul>
						<li>
							sum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was popularised
							in the 1960s with the release of Letraset sheets containing Lorem
							Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem
						</li>
						<li>
							sum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was popularised
							in the 1960s with the release of Letraset sheets containing Lorem
							Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem
						</li>
					</ul>
				</div>
				<label className="bg-[#2b2f2e] p-4 border-b border-black">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckbox}
					/>
					Accpet term and conditions
				</label>
				<div className="flex justify-end ">
					<span className="bg-[#2b2f2e] p-3 border-black border-b text-right ">
						Cena: <span>{isChecked ? value - 40 : value}</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Sulzby;
