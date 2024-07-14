import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Main = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (searchTerm) => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&type=movie`
      );

      setMovies(response.data.Search.slice(0, 50)); // Keep only the first 50 movies
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    // Predefined search term for demonstration purposes
    const searchTerm = "batman"; // Replace this with a dynamic term if needed
    fetchMovies(searchTerm);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <Link to={`/detail/movie/${movie.imdbID}`} key={movie.imdbID}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                <img
                  className="w-full"
                  src={movie.Poster}
                  alt={`${movie.Title} poster`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.Title}</div>
                  <p className="text-gray-700 text-base">{movie.Year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Main;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Main = () => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async (searchTerm) => {
//     const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

//     try {
//       const response = await axios.get(
//         `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&type=movie`
//       );

//       setMovies(response.data.Search.slice(0, 50)); // Keep only the first 50 movies
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     }
//   };

//   useEffect(() => {
//     // Predefined search term for demonstration purposes
//     const searchTerm = "batman"; // Replace this with a dynamic term if needed
//     fetchMovies(searchTerm);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       {movies.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {movies.map((movie) => (
//             <div
//               key={movie.imdbID}
//               className="max-w-sm rounded overflow-hidden shadow-lg"
//             >
//               <img
//                 className="w-full"
//                 src={movie.Poster}
//                 alt={`${movie.Title} poster`}
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{movie.Title}</div>
//                 <p className="text-gray-700 text-base">{movie.Year}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No movies found.</p>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useState } from "react";
// import fetchMovies from "../API-calls/api"; // Adjust the import path as needed

// const MovieSearch = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const searchMovies = async () => {
//     if (!query) return;

//     setIsLoading(true);
//     try {
//       const data = await fetchMovies(query);
//       setMovies(data.Search);
//     } catch (error) {
//       console.error("Failed to fetch movies:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter movie title"
//       />
//       <button onClick={searchMovies} disabled={isLoading}>
//         {isLoading ? "Searching..." : "Search"}
//       </button>
//       <div>
//         {movies?.length ? (
//           movies.map((movie) => (
//             <div key={movie.imdbID}>
//               <h3>{movie.Title}</h3>
//               <img src={movie.Poster} alt={`${movie.Title} poster`} />
//             </div>
//           ))
//         ) : (
//           <p>No movies found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieSearch;
