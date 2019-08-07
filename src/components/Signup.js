import React from "react";
//import PropTypes from "prop-types";
import { useField } from "../hooks/index";
import userservice from "../services/users";
import { notificationChange } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Signup = props => {
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
      const user = await userservice.createUser(newUser);
      props.notificationChange(
        `${user.name}, thank you for signing up for our services!`
      );
      setTimeout(() => props.notificationChange(""), 6000);
    } catch (e) {
      props.notificationChange(`${e.message}!`);
      setTimeout(() => props.notificationChange(""), 6000);
      console.log(e);
    }
  };

  return (
    <div className="container section">
      <div className="row">
        <div className="col s12 m10">
          <h1>Sign up for our wonderful service </h1>
          <h3>- almost free!</h3>
          <form onSubmit={handleSubmit}>
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
            <button className="btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {};

export default connect(
  null,
  { notificationChange }
)(Signup);
