import axios from "axios";
require("dotenv").config();

// set the base URL
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const { REACT_APP_API_KEY } = process.env;
const flags = "&maxResults=30&filter=ebooks&printType=books&projection=lite";

export default {
	getBooks: function (query) {
		return axios.get(url + query.search + "&key=" + REACT_APP_API_KEY + flags);
	},
};
