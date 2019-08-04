import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../reducers/blogsReducer";
import Togglable from "../components/Togglable";

/* NB: Using uncontrolled form here
   a ref to the Toggable component is made so that it is possible to
  trigger togglevisibility
*/

const NewBlog = props => {
  const blogFormRef = React.createRef();

  const addBlog = async event => {
    event.preventDefault();

    const blogObject = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0
    };
    props.createBlog(blogObject);

    //clear form
    event.target.title.value = "";
    event.target.author.value = "";
    event.target.url.value = "";

    blogFormRef.current.toggleVisibility();
  };

  return (
    <Togglable buttonLabel="New blog" ref={blogFormRef}>
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
    </Togglable>
  );
};

export default connect(
  null,
  { createBlog }
)(NewBlog);
