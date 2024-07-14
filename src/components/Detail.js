// import React from "react";
// import { useParams } from "react-router-dom";
// import useContentDetail from "../Hooks/useContentDetail";

// const Detail = () => {
//   const { id, type } = useParams();
//   const { details, loading, error } = useContentDetail(id, type);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!details) return <div>No details available.</div>;

//   return (
//     <div className="detail-container">
//       <h1>{details.Title}</h1>
//       <img src={details.Poster} alt={details.Title} />
//       <p>{details.Plot}</p>
//       <p>
//         <strong>Director:</strong> {details.Director}
//       </p>
//       <p>
//         <strong>Cast:</strong> {details.Actors}
//       </p>
//       <p>
//         <strong>Year:</strong> {details.Year}
//       </p>
//       <p>
//         <strong>Genre:</strong> {details.Genre}
//       </p>
//     </div>
//   );
// };

// export default Detail;

import React from "react";
import { useParams } from "react-router-dom";
// import useContentDetail from "../hooks/useContentDetail";
import useContentDetail from "../Hooks/useContentDetail";

const Detail = () => {
  const { id, type } = useParams();
  const { details, loading, error } = useContentDetail(id, type);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 text-xl">{error}</div>;
  if (!details)
    return <div className="text-center text-xl">No details available.</div>;

  return (
    <div className="detail-container max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{ backgroundImage: `url(${details.Poster})` }}
        >
          <div className="flex justify-end">
            <span className="text-white bg-green-700 py-1 px-3 rounded text-xs">
              {details.Year}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">{details.Title}</h2>
          <p className="text-sm text-gray-600">
            Directed by {details.Director}
          </p>
          <div className="mt-2">
            <p className="text-gray-700">{details.Plot}</p>
          </div>
          <div className="flex justify-between mt-3 item-center">
            <h3 className="text-lg text-bold">
              Cast:{" "}
              <span className="text-md normal-case font-normal">
                {details.Actors}
              </span>
            </h3>
            <span className="bg-blue-500 text-white py-1 px-3 rounded">
              {details.Genre}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
