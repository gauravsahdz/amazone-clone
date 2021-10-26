import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="./">
        {" "}
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_menu">
        <div onClick={handleAuthenticaton} className="header_option">
          <span className="headerLine1">
            hello {!user ? "Guest" : user.email}
          </span>
          <Link to={!user && "/Sign_up"}>
            <span className="headerLine2">{user ? "Sign Out" : "Sign In"}</span>
          </Link>
        </div>

        <div className="header_option">
          <span className="headerLine1">Returns</span>
          <span className="headerLine2">& orders</span>
        </div>
        <Link to="/Checkout_page">
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            <span className="headerLine2 headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
