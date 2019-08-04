import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogsReducer";
import notificationReducer from "./reducers/notificationReducer";
import userReducer from "./reducers/userReducer";
import UsersReducer from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// combining reducers
const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  user: userReducer,
  users: UsersReducer
});

//creating store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
