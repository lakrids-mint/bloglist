import React from "react";
import { useField } from "../hooks/index";
import { connect } from "react-redux";
import { setUser } from "../reducers/userReducer";

import { withRouter } from "react-router-dom";
import loginService from "../services/login";
import blogService from "../services/blogs";
import store from "../store";

const Login = props => {
  console.log("props", props);
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
      console.log("user: ", store.getState().user);
      console.log("user", user);
      props.history.push("/");

      //clear form?
    } catch (e) {
      console.log("Something went wrong! ", e.message);
    }
  };

  return (
    <div className="container">
      <h1>login</h1>
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
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {
  setUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
