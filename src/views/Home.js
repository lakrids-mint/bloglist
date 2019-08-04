import React from "react";
import NewBlog from "../components/NewBlog";
import Blogs from "../components/Blogs";
import store from "../store";

const Home = () => {
  console.log(store.getState());

  return (
    <div>
      <h1>Home, splash page!</h1>
      <NewBlog />
      <Blogs />
    </div>
  );
};

export default Home;
