import React from "react";

const NavBar = () => {
	return (
		<>
			<nav>
				<div className="container">
					<a
						href="#"
						data-target="slide-out"
						className="sidenav-trigger show-on-large"
					>
						<i class="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">About</a>
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
