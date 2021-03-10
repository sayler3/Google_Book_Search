import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import UserContext from "./Context/userContext";

function App() {
	const [userData, setuserData] = useState({
		user: undefined,
		token: undefined,
	});

	const checkLoggin = () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
		}
	};

	useEffect(() => {
		checkLoggin();
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);

	return (
		<div className="App">
			<Router>
				<UserContext.Provider value={{ userData, setuserData }}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/saved" component={Saved} />
						<Route path="/" component={Search} />
					</Switch>
				</UserContext.Provider>
			</Router>
		</div>
	);
}

export default App;
