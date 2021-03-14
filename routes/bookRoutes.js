const router = require("express").Router();
const auth = require("../middleware/auth");

const {
	test,
	getAll,
	saveBook,
	deleteBook,
	getAllByUser,
} = require("../controllers/bookController");

router.get("/books", auth, getAll);

router.get("/books/:id", getAllByUser);

router.post("/books", auth, saveBook);

router.put("/books", test);

router.delete("/books/:id", auth, deleteBook);

module.exports = router;
