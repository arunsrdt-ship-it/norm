import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import NewsList from "./pages/NewsList";
import AboutPage from "./pages/AboutPage";
import PolicyPage from "./pages/PolicyPage";
import Footer from "./components/Footer";
import Demo from "./pages/Demo";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/carts" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
