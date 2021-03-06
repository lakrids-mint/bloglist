import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog, updateLike } from "../reducers/blogsReducer";

const Blogs = props => {
  return (
    <div>
      <ul className="collection">
        {props.blogs.map(blog => (
          <li className="collection-item" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            <button
              className="btn btn-small secondary-content valign-wrapper pink"
              onClick={() => props.deleteBlog(blog.id)}
            >
              <i className="material-icons">delete</i>
            </button>
            <button
              className="btn btn-small secondary-content valign-wrapper pink"
              onClick={() => props.updateLike(blog)}
            >
              {blog.likes}
              <i className="material-icons right">thumb_up</i>
            </button>
          </li>
        ))}
      </ul>
    </div>
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
