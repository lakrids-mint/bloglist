import React from "react";
import userService from "../services/users";

const UserView = () => {
  const getUsers = async () => {
    const users = await userService.getAll();
    console.log("from userview: ", users);
    console.log("typof", typeof users);
  };
  const users = getUsers();

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UserView;
