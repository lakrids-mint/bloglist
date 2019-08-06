import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Menu = ({ user }) => {
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Bloglist
        </Link>
        <ul className="right">
          {user !== null ? <SignedInLinks user={user} /> : <SignedOutLinks />}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
