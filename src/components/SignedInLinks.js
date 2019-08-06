import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ user }) => {
  return (
    <>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/">
          {user !== null ? `${user.username} has logged in` : ""}
        </NavLink>
      </li>
    </>
  );
};

export default SignedInLinks;
