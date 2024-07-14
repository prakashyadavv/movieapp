import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Search from "./search";
import "../css/navbarstyle.css";

const Navbar = () => {
  const [showGenresDropdown, setShowGenresDropdown] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown for checking clicks outside

  // Toggle dropdown visibility
  const toggleGenresDropdown = () => {
    setShowGenresDropdown((prev) => !prev);
  };

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGenresDropdown(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-6">MovieSphere</span>
          <Link to="/movies" className="px-4 py-2 hover:bg-gray-700 rounded">
            Movies
          </Link>
          <Link to="/shows" className="px-4 py-2 hover:bg-gray-700 rounded">
            TV Shows
          </Link>

          {/* Genre Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleGenresDropdown}
              className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
            >
              Genres
            </button>
            {showGenresDropdown && (
              <div className="absolute bg-gray-700 mt-2 rounded shadow-lg">
                <Link
                  to="/genre/Action"
                  className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
                >
                  Action
                </Link>
                <Link
                  to="/genre/Comedy"
                  className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
                >
                  Comedy
                </Link>
                <Link
                  to="/genre/Horror"
                  className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
                >
                  Horror
                </Link>
                <Link
                  to="/genre/Drama"
                  className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
                >
                  Drama
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          {/* <input
            type="text"
            placeholder="Search..."
            className="rounded px-4 py-2 mr-4"
            style={{ background: "white", color: "black" }}
          /> */}
          <Search />
          <Link to="/profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="h-10 w-10 text-xl"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   // State to manage whether the genres dropdown is visible
//   const [showGenresDropdown, setShowGenresDropdown] = useState(false);

//   // Toggle dropdown visibility
//   // const toggleGenresDropdown = () => {
//   //   setShowGenresDropdown(!showGenresDropdown);
//   // };
//   const toggleGenresDropdown = () => {
//     setShowGenresDropdown((prev) => !prev);
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <span className="text-2xl font-bold mr-6">MovieSphere</span>
//           <Link to="/movies" className="px-4 py-2 hover:bg-gray-700 rounded">
//             Movies
//           </Link>
//           <Link to="/shows" className="px-4 py-2 hover:bg-gray-700 rounded">
//             TV Shows
//           </Link>

//           {/* Genre Dropdown */}
//           <div
//             className="relative"
//             onBlur={() => setShowGenresDropdown(false)}
//             tabIndex="0"
//           >
//             <button
//               onClick={toggleGenresDropdown}
//               className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
//             >
//               Genres
//             </button>
//             {showGenresDropdown && (
//               <div className="absolute bg-gray-700 mt-2 rounded shadow-lg">
//                 <Link
//                   to="/genre/Action"
//                   className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
//                 >
//                   Action
//                 </Link>
//                 <Link
//                   to="/genre/Comedy"
//                   className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
//                 >
//                   Comedy
//                 </Link>
//                 <Link
//                   to="/genre/Horror"
//                   className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
//                 >
//                   Horror
//                 </Link>
//                 <Link
//                   to="/genre/Drama"
//                   className="block px-4 py-2 hover:bg-gray-600 text-white w-full text-left"
//                 >
//                   Drama
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="rounded px-4 py-2 mr-4"
//             style={{ background: "white", color: "black" }}
//           />
//           <Link to="/profile">
//             <FontAwesomeIcon
//               icon={faUserCircle}
//               className="h-10 w-10 text-xl"
//             />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
