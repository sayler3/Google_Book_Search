import React, { useContext, useEffect } from "react";
import UserContext from "../Context/userContext";
import { useHistory } from "react-router-dom";

const Search = (props) => {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/login");
	}, [userData.user, history]);

	return (
		<div>
			<h1>hello there</h1>
			<a onClick={props.logout} className="waves-effect waves-light btn-small">
				<i className="material-icons left">cloud</i>button
			</a>
		</div>
	);
};

export default Search;
