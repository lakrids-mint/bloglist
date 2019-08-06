import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/signup" className="btn">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="btn">
          Log in
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
