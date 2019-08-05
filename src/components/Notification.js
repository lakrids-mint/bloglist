import React from "react";
import { connect } from "react-redux";
import { notificationChange } from "../reducers/notificationReducer";

const Notification = props => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  return (
    <div style={style}>
      {props.notification ? props.notification : (style.border = "")}
    </div>
  );
};

const mapStateToProps = state => {
  // sometimes it is useful to console log from mapStateToProps
  return {
    notification: state.notification
  };
};
const mapDispatchToProps = {
  notificationChange
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
