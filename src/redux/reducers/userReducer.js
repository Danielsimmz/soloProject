import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "UNSET_USER":
      return {};
    default:
      return state;
  }
};

// Used to store the movie videos
const videos = (state = [], action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

const videoss = (state = [], action) => {
  switch (action.type) {
    case "SET_VIDEOSS":
      return action.payload;
    default:
      return state;
  }
};

const showcategory = (state = [], action) => {
  switch (action.type) {
    case "PUT_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.userReducer
export default combineReducers({
  userReducer,
  videos,
  showcategory,
  videoss,
});
