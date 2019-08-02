import React, { useEffect } from "react";
import loginService from "./services/login";
import blogService from "./services/blogs";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import { useField } from "./hooks/index";
import { initializeBlogs } from "./reducers/blogsReducer";
import { setUser, initUser } from "./reducers/userReducer";
import NewBlog from "./components/NewBlog";
import Blogs from "./components/Blogs";
import { connect } from "react-redux";
import Notification from "./components/Notification";

const App = props => {
  console.log("get state user from app", props.user);
  const username = useField("text");
  const password = useField("password");

  const blogFormRef = React.createRef();

  useEffect(() => {
    props.initializeBlogs();
  }, []);

  //Gets user from localstorage if
  useEffect(() => {
    props.initUser();
  }, []);

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
      //clear form
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    props.setUser(null);
    //clear form
    console.log(`${props.user.username} logged out`);
  };

  const loginForm = () => {
    return (
      <LoginForm
        password={password}
        username={username}
        handleLogin={handleLogin}
      />
    );
  };
  const loggedIn = () => (
    <div>
      <Notification />
      <h1>Blogs</h1>
      <p>
        {console.log("props", props)}
        {props.user.name} {props.user.username} is logged in{" "}
        <button onClick={() => handleLogout()}>Logout!</button>
      </p>

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <NewBlog />
      </Togglable>
      <Blogs />
    </div>
  );

  return <div>{props.user === null ? loginForm() : loggedIn()}</div>;
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {
  initializeBlogs,
  setUser,
  initUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
