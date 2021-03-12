import React from "react";

const Card = (props) => {
	const books = props.data;
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
										className="btn waves-effect waves-light"
										type="submit"
										name="action"
									>
										Save
										<i class="material-icons right">save</i>
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
