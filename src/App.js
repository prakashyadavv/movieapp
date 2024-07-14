//  import React, { useState } from "react";
//  import { BrowserRouter as Router } from "react-router-dom";
//  import Navbar from "./components/navbar";
//  import Main from "./components/main";

//  const App = () => {
//    const [homeClicked, setHomeClicked] = useState(false);

//    return (
//      <Router>
//        <Navbar onHomeClick={() => setHomeClicked((prev) => !prev)} />
//        <Main key={homeClicked} />
//      </Router>
//    );
//  };

//  export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Movies from "./components/movies"; // Assume you have this component
import Shows from "./components/shows"; // Assume you have this component
// import Genre from "./components/Genre";
import Genre from "./components/Genre";
import Detail from "./components/Detail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/genre/:genreName" element={<Genre />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
