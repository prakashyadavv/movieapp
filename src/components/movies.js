// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMovies = async () => {
//     const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
//     try {
//       const response = await axios.get(
//         `https://www.omdbapi.com/?apikey=${API_KEY}&s=movie&type=movie`
//       );
//       setMovies(response.data.Search);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setError("Failed to fetch movies. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   if (loading) return <div>Loading movies...</div>;
//   if (error) return <div>{error}</div>;
//   if (!movies.length) return <div>No movies found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {movies.map((movie) => (
//           <div
//             key={movie.imdbID}
//             className="max-w-sm rounded overflow-hidden shadow-lg"
//           >
//             <img
//               className="w-full"
//               src={movie.Poster}
//               alt={`${movie.Title} poster`}
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2">{movie.Title}</div>
//               <p className="text-gray-700 text-base">{movie.Year}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movies;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=movie&type=movie`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>{error}</div>;
  if (!movies.length) return <div>No movies found.</div>;

  return (
    <div className="container mx-auto px-4 py-6">
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
    </div>
  );
};

export default Movies;
