import React, { useState } from "react";
import axios from "axios";

const Register = () => {
	const [form, setform] = useState();

	const onChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const submit = async (e) => {
		e.preventDefault();
		try {
			const newUser = await axios.post("/users/register", form);
			console.log(newUser);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="row container">
			<form onSubmit={submit} className="col s12">
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
					<div className="input-field col s6">
						<input
							onChange={onChange}
							placeholder="Name"
							type="text"
							className="validate"
							name="displayName"
						/>
						<label>Display Name</label>
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
				<div className="row">
					<div className="input-field col s12">
						<input
							onChange={onChange}
							type="password"
							className="validate"
							name="passwordCheck"
						/>
						<label>Password Check</label>
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

export default Register;
