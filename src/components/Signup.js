import React from "react";
//import PropTypes from "prop-types";
import { useField } from "../hooks/index";
import userservice from "../services/users";

const Signup = () => {
  const username = useField("text");
  const name = useField("text");
  const password = useField("password");

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      username: e.target.username.value,
      password: e.target.password.value
    };
    try {
      await userservice.createUser(newUser);
      console.log("thanked you for signing up for our services");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <h1 className="center">Sign up for our wonderful service </h1>
      <h3 className="center">- it is almost free!</h3>
      <form onSubmit={handleSubmit} className="container">
        <div>
          Name
          <input name="name" {...username} />
        </div>
        <div>
          <div>
            Username
            <input name="username" {...name} />
          </div>
          Password
          <input name="password" {...password} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
Signup.propTypes = {};

export default Signup;
