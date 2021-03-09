import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	const [form, setform] = useState();

	const onChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		console.log("hi");
	};
	return (
		<div className="row container">
			<form onSubmit={submit} class="col s12">
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
