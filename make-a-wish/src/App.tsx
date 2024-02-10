import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import ForYou from "./pages/ForYou.tsx";
import Community from "./pages/Community.tsx";
import Tracking from "./pages/Tracking.tsx";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
