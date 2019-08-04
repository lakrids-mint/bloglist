import React from "react";
import NewBlog from "../components/NewBlog";
import Blogs from "../components/Blogs";
import store from "../store";

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

export default Home;
