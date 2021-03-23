import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import UserContext from "../Context/userContext";

const NavBar = (props) => {
	const { userData } = useContext(UserContext);

	useEffect(() => {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);
	return (
		<>
			<nav>
				<div className="container">
					<a
						href="/"
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
					<h4>Welcome: {userData.user?.displayName}</h4>
				</li>
				<li>
					<button
						className="btn waves-effect waves-light"
						type="submit"
						name="action"
					>
						Delete Account
						<i class="material-icons right">delete_sweep</i>
					</button>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
