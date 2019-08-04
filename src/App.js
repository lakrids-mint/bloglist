import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { initializeBlogs } from "./reducers/blogsReducer";
import { setUser, initUser } from "./reducers/userReducer";

import Menu from "./components/Menu";
import Login from "./components/Login";
import Signup from "./components/Signup";

import UserView from "./views/UserView";
import BlogsView from "./views/BlogsView";
import Blog from "./components/Blog";
import Home from "./views/Home";

const App = props => {
  console.log("get state user from app", props);

  useEffect(() => {
    props.initializeBlogs();
  }, []);

  //Gets user from localstorage if
  useEffect(() => {
    props.initUser();
  }, []);
  const blogById = id => {
    props.blogs.find(blog => blog.id === Number(id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/users" render={() => <UserView />} />
          <Route path="/blogs" render={() => <BlogsView />} />
          <Route
            exact
            path="/blogs/:id"
            render={({ match }) => <Blog blog={blogById(match.params.id)} />}
          />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs
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
