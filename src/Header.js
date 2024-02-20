import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from './PR-LOGO.png'; // Import the logo image
import { useStateValue } from "./StateProvider";
import Login from "./Login"; // Import the Login component

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* Use the imported logo variable */}
      <img
        className="header__logo"
        src={logo}
        alt="PR Logo" // Add alt text for accessibility
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* Display the actual basket count */}
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>

      {/* Include the Login component */}
      <Login />
    </div>
  );
}

export default Header;
