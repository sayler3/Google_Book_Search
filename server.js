//Bringing in dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

//setup express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db connection
require("./models/connection");

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//custom routes
app.use("/users", require("./routes/userRoutes"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`connected on http://localhost:${PORT}`));
