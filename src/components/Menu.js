import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import store from "../store";

const Menu = () => {
  const user = store.getState().user;
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Bloglist
        </Link>
        {user !== null ? <SignedInLinks user={user} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Menu;
