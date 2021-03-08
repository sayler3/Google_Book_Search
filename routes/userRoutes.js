const router = require("express").Router();
const { test } = require("../controllers/userController");

router.get("/", test);

module.exports = router;
