import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">E-Shop</h1>
      </Link>

      <div className="header__search">
        <input
          type="text"
          placeholder="Search products and more..🙂"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option ">
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>

            <span className="header__optionLineTwo ">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon className="basket" />
          </Link>

          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
