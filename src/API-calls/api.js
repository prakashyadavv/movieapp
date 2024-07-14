import axios from "axios";

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=eba13a38"; // Replace with your actual API key
const BASE_URL = "https://www.omdbapi.com/";

const fetchMovies = async (title) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: title, // Search string
        type: "movie", // You can also use 'series' or 'episode'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OMDB API:", error);
    throw error;
  }
};

export default fetchMovies;
