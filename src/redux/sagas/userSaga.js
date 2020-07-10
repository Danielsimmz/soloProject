import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchGiphy() {
  try {
    const response = yield axios.get("/api/user/giphy");
    yield put({
      type: "SET_GIPHY",
      payload: response.data.data.images.downsized_large,
    });
    console.log("fetchGifs", response.data.data.images.downsized_large);
  } catch (error) {
    console.log("error gifs", error);
  }
}
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get("/api/user", config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: "SET_USER", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchVideos() {
  try {
    const response = yield axios.get("/api/shelf/videos");
    yield put({ type: "SET_VIDEOS", payload: response.data });
    console.log("fetchVideos response.data", response.data);
  } catch (error) {
    console.log("error videos", error);
  }
}

function* fetchVideoss() {
  try {
    const response = yield axios.get("/api/shelf/videoss");
    yield put({ type: "SET_VIDEOSS", payload: response.data });
    console.log("fetchVideos response.data", response.data);
  } catch (error) {
    console.log("error videos", error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("FETCH_GIFS", fetchGiphy);
  yield takeLatest("FETCH_VIDEOS", fetchVideos);
  yield takeLatest("FETCH_VIDEOSS", fetchVideoss);
}

export default userSaga;
