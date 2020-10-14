import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { Header, Container } from "Template";
import "App.css";

function App() {
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
