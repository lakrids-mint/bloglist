import React, { useState, useEffect } from "react";
import loginService from "./services/login";
import blogService from "./services/blogs";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import { useField } from "./hooks/index";
import { initializeBlogs } from "./reducers/blogsReducer";
import NewBlog from "./components/NewBlog";
import Blogs from "./components/Blogs";
import { connect } from "react-redux";
import Notification from "./components/Notification";

const App = props => {
  const username = useField("text");
  const password = useField("password");
  const [user, setUser] = useState(null);

  const blogFormRef = React.createRef();

  useEffect(() => {
    props.initializeBlogs();
  }, []);

  //Gets user from localstorage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggeBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      console.log(user.token);
    }
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    console.log(username, password);
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });
      console.log("user");
      blogService.setToken(user.token);

      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      console.log(user.name, "logged in");
      setUser(user);
      //clear form
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    setUser(null);
    //clear form
    console.log(`${user.username} logged out`);
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
        {user.name} {user.username} is logged in{" "}
        <button onClick={() => handleLogout()}>Logout!</button>
      </p>

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <NewBlog />
      </Togglable>
      <Blogs />
    </div>
  );

  return <div>{user === null ? loginForm() : loggedIn()}</div>;
};

export default connect(
  null,
  { initializeBlogs }
)(App);
