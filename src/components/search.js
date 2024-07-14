// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import '../css/style.css'; // Adjust the path if your CSS file is located elsewhere


// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   // Fetch movies based on query
//   useEffect(() => {
//     const fetchMovies = async () => {
//       if (query.length > 2) {
//         // Only search if query length is more than 2
//         try {
//           const response = await axios.get(
//             `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&type=movie`
//           );
//           setMovies(response.data.Search || []);
//         } catch (error) {
//           console.error("Error fetching movies:", error);
//           setMovies([]);
//         }
//       } else {
//         setMovies([]);
//       }
//     };

//     // Debounce the API call by 500ms
//     const timeoutId = setTimeout(() => {
//       fetchMovies();
//     }, 500);

//     return () => clearTimeout(timeoutId);
//   }, [query]);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="search-input"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {movies.map((movie) => (
//           <Link to={`/detail/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
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
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchResults = async () => {
      if (input.length > 2) {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`
          );
          setResults(response.data.Search || []);
        } catch (error) {
          console.log("Error fetching search results:", error);
        }
      } else {
        setResults([]);
      }
    };

    const timer = setTimeout(() => {
      fetchResults();
    }, 500); // Debounce the search

    return () => clearTimeout(timer);
  }, [input]);

  const handleSelectMovie = (id) => {
    navigate(`/detail/movie/${id}`); // Navigate to the Detail page
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies..."
        className="search-input"
      />
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((movie) => (
            <li
              key={movie.imdbID}
              onClick={() => handleSelectMovie(movie.imdbID)}
            >
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
