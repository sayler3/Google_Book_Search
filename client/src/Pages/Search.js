import React, { useContext, useEffect } from "react";
import UserContext from "../Context/userContext";
import { useHistory } from "react-router-dom";

const Search = (props) => {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/login");

		console.log(userData.user);
	}, [userData.user, history]);

	return (
		<div>
			<h1>hello there</h1>
			<h3>Your name is: {userData.user?.displayName}</h3>
		</div>
	);
};

export default Search;
