import React from "react";

const Blog = ({ blog }) => {
  if (blog === undefined) {
    return <p>loading...</p>;
  }
  console.log(blog);
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>by {blog.author}</p>
      <p>added by ...(display user) plus ability to like</p>
      <p>{blog.likes} likes</p>
      <a target="_blank" href={`http://${blog.url}`}>
        {blog.url}
      </a>
    </div>
  );
};
export default Blog;
