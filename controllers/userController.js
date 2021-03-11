const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
	register: async (req, res) => {
		try {
			const { email, password, passwordCheck, displayName } = req.body;

			if (!email || !password || !passwordCheck || !displayName) {
				return res.status(400).json({ msg: "Please enter all fields" });
			}

			if (passwordCheck.length < 3) {
				return res
					.status(400)
					.json({ msg: "The password must atleast 3 charaters long" });
			}

			if (password !== passwordCheck) {
				return res.status(400).json({ msg: "Passwords do not match" });
			}

			const existingUser = await User.findOne({ emial: email });

			if (existingUser) {
				return res.status(400).json({ msg: "This email already exists" });
			}

			const salt = await bcrypt.genSalt(10);
			const passwordHash = await bcrypt.hash(password, salt);

			const newUser = new User({
				email,
				password: passwordHash,
				displayName,
			});

			const saveUser = await newUser.save();
			res.json(saveUser);
		} catch (error) {
			res.status(500).json({ msg: error });
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			if (!email || !password) {
				res.status(400).json({ msg: "all fields where not meet" });
			}

			const user = await User.findOne({ email: email });

			if (!email) {
				res.status(400).json({ msg: "no match for User" });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				res.status(400).json({ msg: "Wrong password" });
			}

			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
				expiresIn: "24h",
			});

			res.json({
				token,
				user: { id: user._id, displayName: user.displayName },
			});
		} catch (err) {
			res.status(500).json({ msg: err });
		}
	},

	getUser: async (req, res) => {
		try {
			const user = await User.findById(req.user);
			res.json({
				displayName: user.displayName,
				id: user._id,
			});
		} catch (error) {
			res.send(err.response);
		}
	},
};
