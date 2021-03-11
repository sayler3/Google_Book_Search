import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = (props) => {
	useEffect(() => {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);
	return (
		<>
			<nav>
				<div className="container">
					<a
						href="#"
						data-target="slide-out"
						className="sidenav-trigger show-on-large"
					>
						<i className="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to={"/search"}>Search</Link>
						</li>
						<li>
							<Link to={"/saved"}>Saved</Link>
						</li>
						<li>
							<Link to={"/search"} onClick={props.logout}>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<ul className="sidenav" id="slide-out">
				<li>
					<a href="#item1">Item 1</a>
				</li>
				<li>
					<a href="#item1">Item 2</a>
				</li>
				<li>
					<a href="#item1">Item 3</a>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
