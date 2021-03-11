const router = require("express").Router();
const auth = require("../middleware/auth");

const {
	test,
	getAll,
	saveBook,
	deleteBook,
} = require("../controllers/bookController");

router.route("/books", auth).get(getAll).post(saveBook).put(test);

router.route("/books/:id", auth).delete(deleteBook);

module.exports = router;
