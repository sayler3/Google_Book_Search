import React, { useEffect, useState, useContext } from "react";
import UserContext from "../Context/userContext";
import { useHistory } from "react-router-dom";
import SavedCard from "../Components/SavedCard";
import axios from "axios";

const Saved = () => {
	const [books, setbooks] = useState(null);
	const { userData } = useContext(UserContext);
	const history = useHistory();
	const [userID] = useState(userData.user?.id);

	const getSaved = async () => {
		const authToken = localStorage.getItem("auth-token");

		const savedBooks = await axios.get(`/api/books/${userID}`, {
			headers: { "x-auth-token": authToken },
		});

		setbooks(savedBooks.data);
	};

	useEffect(() => {
		if (!userData.user) history.push("/login");
	}, [userData.user, history]);

	useEffect(() => {
		getSaved();
	});

	return (
		<div className="container">
			<h1>Your saved books</h1>
			{books && <SavedCard data={books} />}
		</div>
	);
};

export default Saved;
