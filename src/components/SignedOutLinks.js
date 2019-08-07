import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/signup" className="btn pink">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="btn pink">
          Log in
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
