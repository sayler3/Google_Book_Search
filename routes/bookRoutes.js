const router = require("express").Router();
const { test } = require("../controllers/bookController");

router.get("/", test);

module.exports = router;
