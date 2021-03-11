import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/userContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [form, setform] = useState();
	const { userData, setUserData } = useContext(UserContext);
	const history = useHistory();

	const onChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("/users/login", form);
			// console.log(data);

			setUserData({
				token: data.token,
				user: data.user,
			});

			localStorage.setItem("auth-token", data.token);
			history.push("/");
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => {
		// console.log(userData);
		if (userData.user) history.push("/");
	}, [userData.user, history]);

	return (
		<div className="row container">
			<form onSubmit={submitForm} className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<input
							onChange={onChange}
							type="email"
							className="validate"
							name="email"
						/>
						<label>Email</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input
							onChange={onChange}
							type="password"
							className="validate"
							name="password"
						/>
						<label>Password</label>
					</div>
				</div>
				<button
					className="btn waves-effect waves-light"
					type="submit"
					name="action"
				>
					Submit
					<i className="material-icons right">send</i>
				</button>
			</form>
		</div>
	);
};

export default Login;
