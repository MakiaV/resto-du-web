import React from "react";
import "./dessert.css";

const Dessert = ({ dessert }) => {
	return (
		<div className="dessertContainer">
			<div className="dessert">
				<img
					src={dessert.image}
					alt="dessert"
					width={150}
					className="dessertImg"
				/>
				<img
					src={dessert.logo}
					alt="logo"
					width={50}
					className="dessertLogo"
				/>
			</div>
			<div className="dessertDesc">
				<span>{dessert.nom}</span>
				<span className="dessertDescPrix">Prix: {dessert.prix}</span>
			</div>
		</div>
	);
};

export default Dessert;
