import React from "react";
import axios from "axios";

const SavedCard = (props) => {
	const books = props.data;

	const handleDelete = async (e) => {
		try {
			const id = e.target.getAttribute("data-value");
			const authToken = localStorage.getItem("auth-token");
			await axios.delete(`/api/books/${id}`, {
				headers: { "x-auth-token": authToken },
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{books &&
				books.map((book) => (
					<div
						style={{ boxShadow: "rgb(153 153 153) 0px 10px 10px" }}
						key={book._id}
						className="col s12 m7"
					>
						<h3 className="header">{book.title}</h3>
						<div className="card horizontal">
							<div className="card-image">
								<img src={book.image} alt={book.title} />
							</div>
							<div className="card-stacked">
								<div className="card-content">
									<p>{book.description}</p>
									<br />
									<p>Authors: {book.authors}</p>
								</div>
								<div className="card-action">
									<a target="blank" href={book.link}>
										Preview
									</a>
									<button
										onClick={handleDelete}
										className="btn waves-effect waves-light"
										type="button"
										name="action"
										data-value={book._id}
									>
										Delete
										<i className="material-icons right">delete</i>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default SavedCard;
