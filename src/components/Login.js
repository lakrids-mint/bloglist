import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useField } from "../hooks/index";

import { setUser } from "../reducers/userReducer";
import { notificationChange } from "../reducers/notificationReducer";

import loginService from "../services/login";
import blogService from "../services/blogs";

const Login = props => {
  const username = useField("text");
  const password = useField("password");

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });
      blogService.setToken(user.token);
      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      console.log(user.name, "logged in");
      props.setUser(user);
      props.history.push("/");
      //clear form?
    } catch (e) {
      props.notificationChange("Something went wrong: ", e.message);
      setTimeout(() => props.notificationChange(""), 4000);
      console.log("Something went wrong! ", e.message);
    }
  };

  return (
    <div className="container section">
      <div className="row">
        <div className="col s12 m10">
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            <div>
              username
              <input {...username} />
            </div>
            <div>
              password
              <input {...password} />
            </div>
            <button className="btn" type="submit">
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  setUser,
  notificationChange
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
