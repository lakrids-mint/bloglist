import React from "react";

const User = props => {
  console.log(props);
  return (
    <div>
      <p>{props.user.name}</p>
    </div>
  );
};

export default User;
