import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { initUsers } from "../reducers/usersReducer";

const UserView = props => {
  useEffect(() => {
    props.initUsers();
  }, []);
  console.log(props);
  return (
    <div>
      <h1>Users</h1>
      <table className="striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Blogs created</th>
          </tr>
        </thead>

        <tbody>
          {props.users.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={`users/${user.id}`}>{user.username}</Link>
              </td>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  initUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserView);
