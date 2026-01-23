import { useNavigate } from "react-router-dom";
import { useCustomForm } from "../Context/FormFlow";

const Review = () => {
	const { formData } = useCustomForm();
	const navigate = useNavigate();

	console.log(formData?.participants[0]);
	console.log(formData?.participants[0]?.frontId[0]?.name);
	const frontId = formData?.participants[0]?.frontId[0]?.name;
	const backId = formData?.participants[0]?.backId[0]?.name;

	return (
		<div>
			<p>
				Company Name:
				{formData.CompanyName}
			</p>
			{formData?.participants?.map((item, ind) => {
				return (
					<div key={ind}>
						{ind + 1}
						<p>{item.name}</p>
						<p>{item.share}</p>
						<p>{item.country}</p>
						<p>{item.state}</p>
						{frontId ? (
							<p>{frontId}</p>
						) : (
							<p>Nothing to show there is no frontId</p>
						)}
						{backId ? (
							<p>{backId}</p>
						) : (
							<p>Nothing to show there is no backId</p>
						)}
					</div>
				);
			})}
			<button onClick={() => navigate(-1)}>Back</button>
			<button onClick={() => navigate("/login")}>Submit</button>
		</div>
	);
};

export default Review;
