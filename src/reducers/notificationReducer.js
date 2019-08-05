const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      console.log("notification");
      return action.data;
    default:
      return state;
  }
};
//action creator
export const notificationChange = notification => {
  console.log("note: ", notification);
  return dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: notification
    });
  };
};
export default notificationReducer;
