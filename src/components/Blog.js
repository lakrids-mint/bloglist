import React from "react";

const Blog = ({ blog, deleteBlog, updateLike }) => {
  return (
    <li>
      {blog.title} ||
      {blog.likes}
      <button onClick={deleteBlog}>Delete</button>
      <button onClick={updateLike}>Like</button>
    </li>
  );
};

export default Blog;
