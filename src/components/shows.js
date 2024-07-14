//  import React, { useState, useEffect } from "react";
//  import axios from "axios";

//  const Shows = () => {
//    const [shows, setShows] = useState([]);
//    const [error, setError] = useState(null);
//    const [loading, setLoading] = useState(true);

//    const fetchShows = async () => {
//      const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
//      try {
//        const response = await axios.get(
//          `https://www.omdbapi.com/?apikey=${API_KEY}&s=show&type=series`
//        );
//        setShows(response.data.Search);
//      } catch (error) {
//        console.error("Error fetching TV shows:", error);
//        setError("Failed to fetch TV shows. Please try again.");
//      } finally {
//        setLoading(false);
//      }
//    };

//    useEffect(() => {
//      fetchShows();
//    }, []);

//    if (loading) return <div>Loading TV shows...</div>;
//    if (error) return <div>{error}</div>;
//    if (!shows.length) return <div>No TV shows found.</div>;

//    return (
//      <div className="container mx-auto px-4 py-6">
//        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//          {shows.map((show) => (
//            <div
//              key={show.imdbID}
//              className="max-w-sm rounded overflow-hidden shadow-lg"
//            >
//              <img
//                className="w-full"
//                src={show.Poster}
//                alt={`${show.Title} poster`}
//              />
//              <div className="px-6 py-4">
//                <div className="font-bold text-xl mb-2">{show.Title}</div>
//                <p className="text-gray-700 text-base">{show.Year}</p>
//              </div>
//            </div>
//          ))}
//        </div>
//      </div>
//    );
//  };

//  export default Shows;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link

// const Shows = () => {
//   const [shows, setShows] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchShows = async () => {
//     const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
//     try {
//       const response = await axios.get(
//         `https://www.omdbapi.com/?apikey=${API_KEY}&s=show&type=series`
//       );
//       setShows(response.data.Search);
//     } catch (error) {
//       console.error("Error fetching TV shows:", error);
//       setError("Failed to fetch TV shows. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchShows();
//   }, []);

//   if (loading) return <div>Loading TV shows...</div>;
//   if (error) return <div>{error}</div>;
//   if (!shows.length) return <div>No TV shows found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {shows.map((show) => (
//           <Link to={`/show/${show.imdbID}`} key={show.imdbID}>
//             <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
//               <img
//                 className="w-full"
//                 src={show.Poster}
//                 alt={`${show.Title} poster`}
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{show.Title}</div>
//                 <p className="text-gray-700 text-base">{show.Year}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shows;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchShows = async () => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=show&type=series`
      );
      setShows(response.data.Search);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
      setError("Failed to fetch TV shows. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  if (loading) return <div>Loading TV shows...</div>;
  if (error) return <div>{error}</div>;
  if (!shows.length) return <div>No TV shows found.</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {shows.map((show) => (
          <Link to={`/detail/series/${show.imdbID}`} key={show.imdbID}>
            {" "}
            <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={show.Poster}
                alt={`${show.Title} poster`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{show.Title}</div>
                <p className="text-gray-700 text-base">{show.Year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shows;
