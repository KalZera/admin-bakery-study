import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";

// import { Template } from "./Template";

// import { useComponentDidMount } from "Hooks";

// import { Loading } from "Pages/Components";

function App() {
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Router>
      <div className="container">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
