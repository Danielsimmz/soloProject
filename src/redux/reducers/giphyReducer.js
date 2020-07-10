const giphyReducer = (state = {}, action) => {
  if (action.type === "SET_GIPHY") {
    return action.payload;
  }
  return state;
};

export default giphyReducer;
