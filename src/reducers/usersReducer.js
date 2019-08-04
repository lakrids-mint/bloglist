import usersService from "../services/users";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_USERS":
      console.log("init users from reducer");
      return action.data;
    case "NEW_USER":
      return state.concat(action.data);
    default:
      return state;
  }
};
//action creators

export const setUsers = users => {
  return async dispatch => {
    console.log("dispatching", users);
    dispatch({
      type: "SET_USERS",
      data: users
    });
  };
};

export const createUser = userObject => {
  return async dispatch => {
    const newUser = await usersService.createUser(userObject);
    dispatch({
      type: "NEW_USER",
      data: newUser
    });
  };
};
export const initUsers = () => {
  return async dispatch => {
    console.log("init users...");
    const users = await usersService.getAll();
    console.log(users);
    dispatch({
      type: "INIT_USERS",
      data: users
    });
  };
};
export default userReducer;
