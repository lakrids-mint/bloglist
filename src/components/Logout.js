import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../reducers/userReducer";

const Logout = props => {
  console.log(props);
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    props.setUser(null);
    //clear form
    console.log(`${props.user.username} logged out`);
  };
  handleLogout();
  props.history.push("/");
  //handle logout
  //notify of logout
  //redirect
  return (
    <div>
      <p>logout</p>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {
  setUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
);
