import axios from "axios";

// set the base URL
const url = "https://www.googleapis.com/books/v1/volumes?q=";
// const { API_KEY } = process.env;
const API_KEY = "AIzaSyDZ6VnPVLM_9IO5P3lhyE6q8g6xDeOebMI";
const flags =
	"&maxResults=30&filter=free-ebooks&printType=books&projection=lite";
const queryTest = "harry potter";

export default {
	getBooks: function (query) {
		return axios.get(url + queryTest + "&key=" + API_KEY + flags);
	},
};
