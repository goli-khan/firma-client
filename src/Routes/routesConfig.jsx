import Login from "../Pages/Login.jsx";
import Billing from "../Pages/Billing.jsx";
import OnBoarding from "../Pages/OnBoarding.jsx";
import Country from "../Pages/Country.jsx";
import Poland from "../Pages/Poland.jsx";
import Usa from "../Pages/Usa.jsx";
import Other from "../Pages/Other.jsx";
import NewCompany from "../Pages/NewCompany.jsx";
import Review from "../Components/Review.jsx";
import Fuck from "../Pages/Fuck.jsx";

const routes = [
	{
		path: "/",
		element: <OnBoarding />,
		isPrivate: false,
	},
	{
		path: "/country",
		element: <Country />,
		isPrivate: false,
	},
	{
		path: "/usa",
		element: <Usa />,
		isPrivate: false,
	},
	{
		path: "/:country/:city",
		element: <NewCompany />,
		isPrivate: false,
	},
	{
		path: "/*",
		element: <Fuck />,
		isPrivate: false,
	},
	{
		path: "/new-company",
		element: <NewCompany />,
		isPrivate: false,
	},
	{
		path: "/poland",
		element: <Poland />,
		isPrivate: false,
	},
	{
		path: "/other",
		element: <Other />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <Login />,
		isPrivate: false,
	},
	{
		path: "/review",
		element: <Review />,
		isPrivate: false,
	},
	{
		path: "/billing",
		element: <Billing />,
		isPrivate: false,
	},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
];

export default routes;
