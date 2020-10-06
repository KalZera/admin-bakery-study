import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { Header, Container } from "Template";

// import { Loading } from "Pages/Components";

function App() {
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Router>
      <Header />
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
