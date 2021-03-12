import React from "react";

const Card = (props) => {
	const books = props.data;
	return (
		<>
			{books &&
				books.map((book, index) => (
					<div key={index} className="col s12 m7">
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
								</div>
								<div className="card-action">
									<a href={book.volumeInfo.imageLinks}>This is a link</a>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Card;
