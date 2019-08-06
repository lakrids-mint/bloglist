import React from "react";
import { connect } from "react-redux";
import { notificationChange } from "../reducers/notificationReducer";
import NewBlog from "../components/NewBlog";
import Blogs from "../components/Blogs";

const Home = () => {
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
