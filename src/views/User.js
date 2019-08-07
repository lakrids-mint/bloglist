import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  if (user === undefined) {
    return <p>nothing to show yet...loading...</p>;
  }
  return (
    <div className="container section">
      <div className="row">
        <div className="col s12 m10">
          <h1>
            {user.name} {user.username}
          </h1>
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Blogs added</h4>
            </li>
            {user.blogs.map(blog => (
              <li className="collection-item" key={blog.id}>
                <span>
                  <Link to={`../blogs/${blog.id}`}>{blog.title}</Link>
                  {"  "}
                </span>
                <span>by {blog.author} </span>
                <span className="btn pink secondary-content">
                  {blog.likes}
                  <i className="material-icons small  right">thumb_up</i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
