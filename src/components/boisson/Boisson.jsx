import React from "react";
import "./boisson.css";

const Boisson = ({ boisson }) => {
	return (
		<div className="boissonContainer">
			<div className="bottle">
				<img
					src={boisson.image}
					alt="boisson"
					width={150}
					className="bottleImg"
				/>
				<img
					src={boisson.logo}
					alt="boisson"
					width={50}
					className="bottleLogo"
				/>
			</div>
			<div className="boissonDesc">
				<span>{boisson.nom}</span>
				<span className="boissonDescPrix">Prix: {boisson.prix}</span>
			</div>
		</div>
	);
};

export default Boisson;
