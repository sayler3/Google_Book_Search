import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/userContext";
import { useHistory } from "react-router-dom";
import API from "../Utils/API";
import Card from "../Components/Card";

const Search = (props) => {
	const [query, setquery] = useState(null);
	const [books, setbooks] = useState(null);
	const { userData } = useContext(UserContext);
	const history = useHistory();

	const onChange = (e) => {
		setquery({ ...query, [e.target.name]: e.target.value });
	};

	const onSearch = async (e) => {
		e.preventDefault();
		try {
			const userQuery = query;
			const { data } = await API.getBooks(userQuery);

			setbooks(data.items);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!userData.user) history.push("/login");

		console.log(userData.user);
	}, [userData.user, history]);

	return (
		<div>
			<div className="background"></div>
			<br />

			<div className="container">
				<h3>Your name is: {userData.user?.displayName}</h3>
				<br />
				<form onSubmit={onSearch} className="col s12">
					<div className="input-field col s8">
						<i className="material-icons prefix">search</i>
						<input
							onChange={onChange}
							name="search"
							type="text"
							className="validate"
						/>
						<label>Search for a book</label>
					</div>
				</form>
				<Card data={books} />
			</div>
		</div>
	);
};

export default Search;
