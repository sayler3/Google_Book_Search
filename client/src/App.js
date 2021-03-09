import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
	useEffect(() => {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
