import React from "react";
//import PropTypes from "prop-types";
import { useField } from "../hooks/index";

const Signup = () => {
  const username = useField("text");
  const name = useField("text");
  const password = useField("password");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("user signed up", name, username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div>
        username
        <input {...username} />
      </div>
      <div>
        <div>
          Name
          <input {...username} />
        </div>
        password
        <input {...password} />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};
Signup.propTypes = {};

export default Signup;
