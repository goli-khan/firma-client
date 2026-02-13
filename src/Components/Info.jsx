const Info = () => {
	return (
		<>
			<div className="bg-[#2b2f2e] p-4 ">
				<p>Popis zvoleneej krajiny:</p>
				It is a long established fact that a reader will be distracted by the
				readable content of a <span>page when looking at its layout.</span>The
				point of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using 'Content here, content
				here', making it look like readable English. Many desktop publishing
				<br />
				<br />
				packages and web page editors now use Lorem Ipsum as their default model
				text, and a search for 'lorem ipsum' will uncover many web sites still
				in their infancy. Various versions have evolved over the years,
				sometimes by accident, sometimes on purpose (injected humour and the
				like).
				<div className="flex p-4">
					<span className="w-[50%]">
						<p className="text-xl font-bold">Vyhody krajiny</p>
						<ul className="list-disc">
							<li>its better that i am by my self</li>
							<li>take me back to a place</li>
							<li>where the snow will flal on my face</li>
						</ul>
					</span>
					<span className="w-[50%] ">
						<p className="text-md font-bold">Licencia a vedenia firmy</p>
						in their infancy. Various versions have evolved over the years,
						sometimes by accident, sometimes on purpose (injected humour and the
						like).
					</span>
				</div>
			</div>
		</>
	);
};

export default Info;
