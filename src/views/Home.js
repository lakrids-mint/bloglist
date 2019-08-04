import React from "react";
import Togglable from "../components/Togglable";
import NewBlog from "../components/NewBlog";
import Blogs from "../components/Blogs";
import store from "../store";

const Home = () => {
  const blogFormRef = React.createRef();
  console.log(store.getState());

  return (
    <div>
      <h1>Home, splash page!</h1>
      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <NewBlog />
      </Togglable>
      <Blogs />
    </div>
  );
};

export default Home;
