const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: true,
	},
	authors: {
		type: String,
		trim: true,
		required: true,
	},
	description: {
		type: String,
		trim: true,
		required: true,
	},
	image: {
		type: String,
	},
	link: {
		type: String,
	},
});

module.exports = Book = mongoose.model("book", bookSchemas);
