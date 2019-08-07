import React from "react";
import { addComment, updateLike } from "../reducers/blogsReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Togglable from "../components/Togglable";

const Blog = props => {
  const blog = props.blog;
  const blogFormRef = React.createRef();

  const findUserByBlogId = () => {
    //go through list of users and for each user go through the blogs they added and compare to id, if theres a match return user(not the matching id)
    //  console.log("users", props.users);
  };
  findUserByBlogId();

  //comment feature - own component?
  const submitComment = e => {
    e.preventDefault();
    console.log(e.target.comment.value);
    const comment = {
      comment: e.target.comment.value
    };
    props.addComment(comment, blog);
    //some input validation
    //call to action creator which calls blogservice
  };
  if (blog === undefined) {
    return <p>loading...</p>;
  }
  return (
    <div className="container section">
      <div className="row">
        <div className="col s12 m10">
          <h3>{blog.title}</h3>
          <p>by {blog.author}</p>
          <span> added by </span>
          <Link to={`/users/${blog.user.id}`}>{blog.user.username}</Link>
          <div className="row">
            <div className="col">
              <button
                className="btn pink"
                onClick={() => props.updateLike(blog)}
              >
                {blog.likes} <i className="material-icons right">thumb_up</i>
              </button>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`http://${blog.url}`}
                className="btn pink"
              >
                Read it here!
              </a>
            </div>
          </div>

          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Comments</h4>
              <h6>All comments are anonymous</h6>
            </li>
            {blog.comments.map(comment => (
              <li className="collection-item" key={comment._id}>
                {comment.comment}
              </li>
            ))}
          </ul>
          <Togglable buttonLabel="Add comment" ref={blogFormRef}>
            <form onSubmit={submitComment}>
              <input name="comment" />
              <button className="btn" type="submit">
                add comment
              </button>
            </form>
          </Togglable>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addComment,
  updateLike
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
