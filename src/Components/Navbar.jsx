import flag from "../assets/US-UK_Flag.svg";
const Navbar = () => {
	return (
		<div className="bg-[#2b2f38] flex justify-between px-20 py-5">
			<h1 className="font-bold">
				FIRMA <span className="text-yellow-400">V ZAHRANICI</span>
			</h1>
			<div className="flex justify-around ">
				EN <img className="pl-2" src={flag} alt={flag} />
			</div>
		</div>
	);
};

export default Navbar;
