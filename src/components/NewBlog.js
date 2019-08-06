import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../reducers/blogsReducer";
import { notificationChange } from "../reducers/notificationReducer";
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
    try {
      await props.createBlog(blogObject);
      props.notificationChange(`${blogObject.title} was created`);
      setTimeout(() => props.notificationChange(""), 4000);
    } catch (e) {
      props.notificationChange(`${e.message}!`);
      setTimeout(() => props.notificationChange(""), 6000);
    } finally {
      blogFormRef.current.toggleVisibility();
      /* event.target.title.value = "";
      event.target.author.value = "";
      event.target.url.value = ""; */
    }
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
            <input className="btn" type="submit" value="Create" />
          </div>
        </form>
      </div>
    </Togglable>
  );
};

export default connect(
  null,
  { createBlog, notificationChange }
)(NewBlog);
