const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
};
