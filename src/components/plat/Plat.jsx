import React from "react";
import "./plat.css";

const Plat = ({ plat }) => {
	return (
		<div className="platContainer">
			<div className="plat">
				<div className="platContent">
					<img src={plat.logo} alt="logo" width={50} />
					<img src={plat.image} alt="plat" width={250} />
				</div>
			</div>
			<div className="platDescription">
				<span>{plat.nom}</span>
				<span className="platDescPrix">Prix: {plat.prix}</span>
			</div>
		</div>
	);
};

export default Plat;
