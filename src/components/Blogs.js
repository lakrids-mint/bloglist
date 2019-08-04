import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog, updateLike } from "../reducers/blogsReducer";

const Blogs = props => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {props.blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>

            <button
              className="btn btn-small"
              onClick={() => props.updateLike(blog)}
            >
              {blog.likes}
              <i className="material-icons right">thumb_up</i>
            </button>
            <button
              className="btn btn-small"
              onClick={() => props.deleteBlog(blog.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//
//
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
