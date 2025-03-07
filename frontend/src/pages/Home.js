import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">📖 Welcome to the E-Library</h1>
        <p className="subtitle">
          Discover, Read, and Explore a World of Books at Your Fingertips.
        </p>
        <Link to="/books" className="explore-btn">📚 Explore Library</Link>
      </div>
    </div>
  );
};

export default Home;
