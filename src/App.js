import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Product from "./Product"; // Import Product component
import { auth } from "./firebase"; // Import auth from firebase.js

function App() {
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        // Dispatch the user to the context if needed
      } else {
        // the user is logged out
        // Dispatch null or perform any other actions if needed
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header /> {/* Render Header outside of Routes */}
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            {/* Update route for Product component */}
            <Route path="product" element={<Product />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
