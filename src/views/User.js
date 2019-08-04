import React from "react";

const User = ({ user }) => {
  if (user === undefined) {
    return <p>nothing to show yet...loading...</p>;
  }
  return (
    <div>
      <h1>
        {user.name} {user.username}
      </h1>
      <h2>Added blogs</h2>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>
            <span>{blog.title}---></span>
            <span>Likes: {blog.likes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
