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
	const [userData, setUserData] = useState({
		user: undefined,
		token: undefined,
	});

	const checkLoggin = async () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
		} else {
			const userRes = await axios.get("/users", {
				headers: { "x-auth-token": token },
			});

			console.log("User", userRes);

			setUserData({ token, user: userRes.data });
		}
	};

	const logout = () => {
		setUserData({ token: undefined, user: undefined });
		localStorage.setItem("auth-token", "");
	};

	useEffect(() => {
		checkLoggin();
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);

	return (
		<div className="App">
			<Router>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/saved" component={Saved} />
						<Route path="/">
							<Search logout={logout} />
						</Route>
					</Switch>
				</UserContext.Provider>
			</Router>
		</div>
	);
}

export default App;
