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
				<div className="bg-[#2b2f2e] p-4 border-b border-black flex flex-col gap-4 rounded-tr-4xl ">
					<span className="border-b w-[40%]"> Obsah zvolenej Sulzby: </span>
					<ul className="space-y-3">
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							one
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							two
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							three
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							four
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							five
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							six
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							seven
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							eigth
						</li>
						<li className="flex items-center gap-3">
							<span className="w-6 h-6 flex items-center justify-center border border-yellow-500 text-yellow-500 rounded-full text-sm">
								✓
							</span>
							nine
						</li>
					</ul>
				</div>
				<p className="bg-[#2b2f2e] p-4 pb-0 ">Doplnkove Sulzby</p>
				<label className="bg-[#2b2f2e] p-4 border-b border-black flex items-center gap-3 cursor-pointer rounded-bl-4xl">
					<input
						className="appearance-none w-4 h-4 border-2 border-gray-500 bg-transparent checked:bg-blue-500 checked:border-blue-500 relative clip-octagon"
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckbox}
					/>
					Vytvorenie USA firemnje online prezentacie (web stranka, domena, logo)
				</label>
				<div className="flex justify-end ">
					<span className="bg-[#2b2f2e] p-3 border-black border-b text-right ">
						Cena:{" "}
						<span className="text-yellow-500 font-bold">
							{isChecked ? value - 40 : value}₤
						</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Sulzby;
