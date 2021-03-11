const Book = require("../models/book");

module.exports = {
	test: (req, res) => res.send({ success: true }),

	getAll: async (req, res) => {
		try {
			const allBooks = await Book.find({});
			res.json(allBooks);
		} catch (error) {
			console.log(error);
			res.send(error);
		}
	},

	saveBook: async (req, res) => {
		try {
			const saveBooks = new Book({
				title: req.body.title,
				authors: req.body.authors,
				discription: req.body.discription,
				image: req.body.image,
				link: req.body.link,
				userId: req.user,
			});
			res.json(await saveBooks.save());
		} catch (error) {
			console.log(error);
			res.send(error);
		}
	},

	deleteBook: async (req, res) => {
		try {
			const destroyBook = Book.findById({ _id: req.params.id });
			res.json(destroyBook);
		} catch (error) {
			console.log(error);
			res.send(error);
		}
	},
};
