import { useEffect, useRef, useState } from "react";
import "./App.css";

import Plat from "./components/plat/Plat";
import { plats, boissons, desserts } from "../src/data";
import Boisson from "./components/boisson/Boisson";
import Dessert from "./components/dessert/Dessert";

import Team from "./components/team/Team";

function App() {
	const myMemu = useRef();
	const myEquipe = useRef();
	const myContact = useRef();
	const presentation = useRef();
	const navItem1 = useRef();
	const navItem2 = useRef();
	const navItem3 = useRef();
	const c1 = useRef();
	const c2 = useRef();
	const c3 = useRef();

	const scrollToMenu = () =>
		myMemu.current.scrollIntoView({ behavior: "smooth" });
	const scrollToTeam = () =>
		myEquipe.current.scrollIntoView({ behavior: "smooth" });
	const scrollToContact = () =>
		myContact.current.scrollIntoView({ behavior: "smooth" });
	const scrollToTop = () =>
		presentation.current.scrollIntoView({ behavior: "smooth" });

	useEffect(() => {
		const options1 = {
			root: null,
			rootMargin: "0px",
			threshold: 0.3,
		};
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				navItem1.current.classList.add("active1");
				c1.current.classList.add("hide1");
			} else {
				navItem1.current.classList.remove("active1");
				c1.current.classList.remove("hide1");
			}
		}, options1);
		observer.observe(myMemu.current);
	}, []);
	useEffect(() => {
		const options2 = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				navItem2.current.classList.add("active2");
				c2.current.classList.add("hide2");
			} else {
				navItem2.current.classList.remove("active2");
				c2.current.classList.remove("hide2");
			}
		}, options2);
		observer.observe(myEquipe.current);
	}, []);
	useEffect(() => {
		const options3 = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		};
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				navItem3.current.classList.add("active3");
				c3.current.classList.add("hide3");
			} else {
				navItem3.current.classList.remove("active3");
				c3.current.classList.remove("hide3");
			}
		}, options3);
		observer.observe(myContact.current);
	}, []);
	return (
		<div className="App">
			<div className="navbarContainer">
				<div className="navbarItems">
					<div className="navbarItem1">
						<span
							className="item1"
							ref={navItem1}
							onClick={() => scrollToMenu()}
						>
							Menu
						</span>
						<span className="circle1" ref={c1}></span>
					</div>
					<div className="navbarItem2">
						<span
							className="item2"
							ref={navItem2}
							onClick={() => scrollToTeam()}
						>
							Equipe
						</span>
						<span className="circle2" ref={c2}></span>
					</div>
					<div className="navbarItem3">
						<span
							className="item3"
							ref={navItem3}
							onClick={() => scrollToContact()}
						>
							Contact
						</span>
						<span className="circle3" ref={c3}></span>
					</div>
				</div>
				<img
					src="src/assets/logo.jpeg"
					alt="logo"
					width={35}
					className="navbarLogo"
					onClick={() => scrollToTop()}
				/>
				<div className="navRight">
					<div className="reserverBtn">RÉSERVER</div>
				</div>
			</div>
			<section className="presentation" ref={presentation}>
				<h2 className="nom">Resto du web</h2>

				<p>
					Nourissez vous du savoir, notre Restaurant propose une
					cuisine raffinée, élaborée à partir de produits du web et de
					délicieux frameworks.
				</p>
			</section>

			<section className="menuContainer" ref={myMemu}>
				<h2>DÉCOUVREZ NOS MENUS</h2>
				<p className="menuItem">Plats du jour</p>
				<div className="plats">
					{plats?.map((plat) => (
						<Plat plat={plat} key={plat.id} />
					))}
				</div>
				<p className="menuItem">Boissons</p>
				<div className="boissons">
					{boissons?.map((boisson) => (
						<Boisson boisson={boisson} key={boisson.id} />
					))}
				</div>
				<p className="menuItem">Desserts</p>
				<div className="desserts">
					{desserts?.map((dessert) => (
						<Dessert dessert={dessert} key={dessert.id} />
					))}
				</div>
			</section>
			<section className="equipe" ref={myEquipe}>
				<h2>Notre équipe</h2>
				<h3>Les toques du web</h3>
				<Team />
			</section>
			<section className="contact" ref={myContact}>
				<div className="contactWrapper">
					<div className="contactLeft">
						<p>RESTO DU WEB</p>
						<p>127.0.0.1 Localhost</p>
						<p>33100 Germany</p>
					</div>
					<div className="contactCenter">
						<p>Email: contact@resto-du-web.com</p>
						<p>Tel: 255.255.255.0</p>
						<p className="social">
							<img
								src="src/assets/icons/facebook.png"
								alt="facebook"
								width={30}
							/>
							<img
								src="src/assets/icons/instagram.png"
								alt="instagram"
								width={30}
							/>
							<img
								src="src/assets/icons/twitter.png"
								alt="twitter"
								width={28}
							/>
						</p>
					</div>
					<div className="contactRight">
						<div>
							<p>OUVERTURE</p>
							<p>7J/7</p>
							<p>24H/24</p>
						</div>
					</div>
				</div>
				<div className="copyright">
					&copy; 2023 Resto Du Web - Tous droits réservés
				</div>
			</section>
		</div>
	);
}

export default App;
