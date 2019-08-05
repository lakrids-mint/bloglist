import React from "react";
import { addComment } from "../reducers/blogsReducer";
import { connect } from "react-redux";

const Blog = props => {
  const blog = props.blog;
  const findUserByBlogId = blogId => {
    //go through list of users and for each user go through the blogs they added and compare to id, if theres a match return user(not the matching id)
    //  console.log("users", props.users);
  };
  findUserByBlogId(77);
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
    <div>
      <h1>{blog.title}</h1>
      <p>by {blog.author}</p>
      <p>added by ...(display user) plus ability to like</p>
      <p>{blog.likes} likes</p>
      <a rel="noopener noreferrer" target="_blank" href={`http://${blog.url}`}>
        {blog.url}
      </a>
      <h2>Comments</h2>
      <form onSubmit={submitComment}>
        <input name="comment" />
        <button className="btn" type="submit">
          add comment
        </button>
      </form>
      <ul>
        {blog.comments.map(comment => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  addComment
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
