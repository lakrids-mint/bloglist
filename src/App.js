import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { initializeBlogs } from "./reducers/blogsReducer";
import { setUser, initUser } from "./reducers/userReducer";
import { initUsers } from "./reducers/usersReducer";

import Menu from "./components/Menu";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import UserView from "./views/UserView";
import BlogsView from "./views/BlogsView";
import Blog from "./components/Blog";
import Home from "./views/Home";
import User from "./views/User";

const App = props => {
  console.log("get state user from app", props);

  useEffect(() => {
    props.initializeBlogs();
  }, []);

  useEffect(() => {
    props.initUsers();
  }, []);

  //Gets user from localstorage if there
  useEffect(() => {
    props.initUser();
  }, []);

  //helper methods -> make into one method
  const blogById = blogid => {
    const blog = props.blogs.find(blog => blog.id === blogid);
    return blog;
  };

  const userById = userid => {
    const user = props.users.find(user => user.id === userid);
    return user;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Menu user={props.user} />
        <Notification />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/users" render={() => <UserView />} />
          <Route
            exact
            path="/users/:id"
            render={({ match }) => <User user={userById(match.params.id)} />}
          />
          <Route exact path="/blogs" render={() => <BlogsView />} />
          <Route
            exact
            path="/blogs/:id"
            render={({ match }) => <Blog blog={blogById(match.params.id)} />}
          />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/logout" render={() => <Logout />} />
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs,
    users: state.users,
    notification: state.notification
  };
};

const mapDispatchToProps = {
  initializeBlogs,
  setUser,
  initUser,
  initUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
