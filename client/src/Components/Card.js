import React from "react";
import axios from "axios";

const Card = (props) => {
	const books = props.data;

	const handleSave = async (e) => {
		try {
			const indexValue = e.currentTarget.getAttribute("data-value");
			const authToken = localStorage.getItem("auth-token");
			const bookObject = books[indexValue].volumeInfo;

			const save = {
				title: bookObject.title,
				authors: bookObject.authors,
				description: bookObject.description,
				image: bookObject.imageLinks.thumbnail,
				link: bookObject.previewLink,
			};
			const newBook = await axios.post("/api/books", save, {
				headers: { "x-auth-token": authToken },
			});

			console.log(newBook);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{books &&
				books.map((book, index) => (
					<div
						style={{ boxShadow: "rgb(153 153 153) 0px 10px 10px" }}
						key={index}
						className="col s12 m7"
					>
						<h3 className="header">{book.volumeInfo.title}</h3>
						<div className="card horizontal">
							<div className="card-image">
								<img
									src={book.volumeInfo.imageLinks.thumbnail}
									alt={book.volumeInfo.title}
								/>
							</div>
							<div className="card-stacked">
								<div className="card-content">
									<p>{book.volumeInfo.description}</p>
									<br />
									<p>Authors: {book.volumeInfo.authors}</p>
								</div>
								<div className="card-action">
									<a target="blank" href={book.volumeInfo.previewLink}>
										Preview
									</a>
									<button
										onClick={handleSave}
										className="btn waves-effect waves-light"
										type="button"
										name="action"
										data-value={index}
									>
										Save
										<i className="material-icons right">save</i>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Card;
