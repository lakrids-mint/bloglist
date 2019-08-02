const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("this is the user state", action.data);
      return action.data;
    case "INIT_USER":
      return action.data;
    default:
      return state;
  }
};
//action creators
export const setUser = user => {
  return async dispatch => {
    console.log("dispatching", user);
    dispatch({
      type: "SET_USER",
      data: user
    });
  };
};

export const initUser = () => {
  return async dispatch => {
    console.log("init user...");
    //get from localstorage
    const loggedUserJSON = window.localStorage.getItem("loggeBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log("inituser", user);
      dispatch({
        type: "INIT_USER",
        data: user
      });
    } else {
      console.log("no user in localstorage");
    }
  };
};

export default userReducer;
