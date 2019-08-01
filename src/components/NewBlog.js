import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../reducers/blogsReducer";

const NewBlog = props => {
  console.log("from newblog props: ", props);
  const addBlog = async event => {
    event.preventDefault();
    //blogFormRef.current.toggleVisibility();

    const blogObject = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0
    };
    //clear form
    props.createBlog(blogObject);
  };

  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={addBlog}>
        <div>
          Title
          <input name="title" />
        </div>
        <div>
          Author
          <input name="author" />
        </div>
        <div>
          Url
          <input name="url" />
        </div>
        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  { createBlog }
)(NewBlog);
