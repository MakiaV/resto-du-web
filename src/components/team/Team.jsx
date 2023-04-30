import React from "react";
import "./team.css";

const Team = () => {
	return (
		<div className="teamContainer">
			<div
				className="nav nav-pills teamNav"
				id="pills-tab"
				role="tablist"
			>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember active"
						id="pills-brendan-eich-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-brendan-eich"
						type="button"
						role="tab"
						aria-controls="pills-brendan-eich"
						aria-selected="true"
					>
						<img
							src="src/assets/equipe/js-logo.png"
							alt="logo"
							className="teamMemberLogo memberLogoJs"
						/>
						<img
							src="src/assets/equipe/Brendan_Eich.jpeg"
							alt="team"
							className="teamMemberImg"
						/>
						<p className="teamMemberName">Brendan Eich</p>
					</div>
				</div>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember"
						id="pills-jordan-walke-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-jordan-walke"
						type="button"
						role="tab"
						aria-controls="pills-jordan-walke"
						aria-selected="false"
					>
						<img
							src="src/assets/boissons/react-logo.png"
							alt="logo"
							className="teamMemberLogo memberLogoReact"
						/>
						<img
							src="src/assets/equipe/jordan-walke.jpeg"
							alt="team"
							className="teamMemberImg"
						/>
						<p className="teamMemberName">Jordan Walke</p>
					</div>
				</div>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember"
						id="pills-evan-you-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-evan-you"
						type="button"
						role="tab"
						aria-controls="pills-evan-you"
						aria-selected="false"
					>
						<img
							src="src/assets/plats/vue-logo.png"
							alt="logo"
							className="teamMemberLogo memberLogoVue"
						/>
						<img
							src="src/assets/equipe/evan-you.jpeg"
							alt="team"
							className="teamMemberImg"
						/>
						<p className="teamMemberName"> Evan You</p>
					</div>
				</div>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember"
						id="pills-rasmus-lerdorf-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-rasmus-lerdorf"
						type="button"
						role="tab"
						aria-controls="pills-rasmus-lerdorf"
						aria-selected="false"
					>
						<img
							src="src/assets/plats/php-logo.png"
							alt="logo"
							className="teamMemberLogo memberLogoPhp"
						/>
						<img
							src="src/assets/equipe/rasmus-lerdorf.jpeg"
							alt="team"
							className="teamMemberImg"
						/>
						<p className="teamMemberName">Rasmus Lerdorf</p>
					</div>
				</div>
			</div>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show teamDescription active"
					id="pills-brendan-eich"
					role="tabpanel"
					aria-labelledby="pills-brendan-eich-tab"
					tabIndex="0"
				>
					Brendan Eich, né en 1961 à Pittsburgh en Pennsylvanie, est
					un informaticien américain, inventeur du langage JavaScript.
					Il travaille aussi chez Silicon Graphics, avant d'être
					recruté par Netscape Communications en 1995. Il participe à
					la création de la Mozilla Foundation. Nommé directeur
					général de sa filiale Mozilla Corporation en mars 2014. En
					2015 il fonde la société Brave Software dont il est
					directeur général.
				</div>
				<div
					className="tab-pane fade teamDescription"
					id="pills-jordan-walke"
					role="tabpanel"
					aria-labelledby="pills-jordan-walke-tab"
					tabIndex="0"
				>
					React a été créé par Jordan Walke, ingénieur logiciel chez
					Facebook. Il s'est inspiré du langage de programmation
					fonctionnel Lisp et a cherché à créer une bibliothèque qui
					permettrait aux développeurs de créer des composants
					réutilisables qui pourraient être facilement combinés pour
					construire des interfaces utilisateur complexes
				</div>
				<div
					className="tab-pane fade teamDescription"
					id="pills-evan-you"
					role="tabpanel"
					aria-labelledby="pills-evan-you-tab"
					tabIndex="0"
				>
					My name is Evan You. I am an independent software developer
					currently based in Singapore. I am the creator of the
					JavaScript framework Vue.js and the frontend build tool
					Vite. Most of my work is open source and publicly available
					on GitHub. If you happen to benefit from my OSS work, you
					can support me financially via GitHub Sponsors.
				</div>
				<div
					className="tab-pane fade teamDescription"
					id="pills-rasmus-lerdorf"
					role="tabpanel"
					aria-labelledby="pills-rasmus-lerdorf-tab"
					tabIndex="0"
				>
					Rasmus Lerdorf est le premier créateur de PHP, qui a évolué
					de son projet personnel de page d'accueil à un langage de
					script open-source utilisé dans le monde entier.
				</div>
			</div>
		</div>
	);
};

export default Team;
