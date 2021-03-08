const router = require("express").Router();
const {
	test,
	getAll,
	saveBook,
	deleteBook,
} = require("../controllers/bookController");

router.route("/books").get(getAll).post(saveBook).put(test);

router.route("/books/:id").delete(deleteBook);

module.exports = router;
