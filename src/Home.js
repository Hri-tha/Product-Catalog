import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from "./Background.jpg"; // Import your background image

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home__overlay">
        <h1 className="home__tagline">BUY PRODUCTS AT CHEAP PRICES</h1>
        {/* Move the link below the tagline */}
        <div className="home__linkContainer">
          <Link to="/product" className="home__link">Our products</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

