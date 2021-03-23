import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
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
			try {
				const userRes = await axios.get("/users", {
					headers: { "x-auth-token": token },
				});

				// console.log("User", userRes);
				setUserData({ token, user: userRes.data });
			} catch (err) {
				console.log("User needs to login");
			}
		}
	};

	const logout = () => {
		setUserData({ token: undefined, user: undefined });
		localStorage.setItem("auth-token", "");
	};

	useEffect(() => {
		checkLoggin();
	}, []);

	return (
		<div className="App">
			<UserContext.Provider value={{ userData, setUserData }}>
				<Router>
					{!userData.user ? (
						<>
							<Link to="/login">Login</Link>{" "}
							<Link to="/register">Register</Link>
						</>
					) : (
						<NavBar logout={logout} />
					)}

					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/saved" component={Saved} />
						<Route path="/" component={Search} />
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
