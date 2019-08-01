import React from "react";
import { connect } from "react-redux";
import Blog from "./Blog";
import { deleteBlog, updateLike } from "../reducers/blogsReducer";

const Blogs = props => {
  console.log("BLOGS componenet, props: ", props);
  return (
    <ul>
      {props.blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          deleteBlog={() => props.deleteBlog(blog.id)}
          updateLike={() => props.updateLike(blog)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  };
};

const mapDispatchToProps = {
  deleteBlog,
  updateLike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
