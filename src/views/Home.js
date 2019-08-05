import React from "react";
import { connect } from "react-redux";

import NewBlog from "../components/NewBlog";
import Blogs from "../components/Blogs";
import store from "../store";
import { notificationChange } from "../reducers/notificationReducer";

const Home = () => {
  console.log(store.getState());

  return (
    <div className="container">
      <h1>Blog app</h1>
      <NewBlog />
      <Blogs />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};
const mapDispatchToProps = {
  notificationChange
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
