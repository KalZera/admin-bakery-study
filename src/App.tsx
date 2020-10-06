import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";

// import { Loading } from "Pages/Components";

function App() {
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
