import React, { Component } from "react";
import Axios from "axios";
import ReactPlayer from "react-player";
// import EditForm from "../EditForm/EditForm";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AdminPage extends Component {
  state = {
    data: [""],
    description: "",
    url: "",
    isEditable: false,
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    Axios.get("/api/shelf/videos")
      .then((result) => {
        this.setState({
          data: [...result.data],
        });
      })
      .catch((error) => console.log(error));
  };

  postVideos = () => {
    console.log("in onSubmit");
    Axios.post("/api/shelf", {
      url: this.state.url,
      category_id: this.state.category_id,
    })
      .then((result) => {
        this.setState({ category_id: "", url: "" });
        this.getVideos();
      })
      .catch((error) => console.log(error));
  };

  deleteVideo = (event) => {
    console.log("In delete");
    Axios.delete(`/api/shelf/${event.target.id}`)
      .then((result) => this.getVideos())
      .catch((error) => console.log(error));
  };

  updateImage = (event) => {
    console.log("In update");
    Axios.put(`/api/shelf/${event.target.id}`)
      .then((result) => this.getImages())
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <p>Shelf Page</p>

        <form onSubmit={() => this.postVideos()}>
          Video URL:
          <input
            type="text"
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
          />
          <br />
          Category ID:
          <textarea
            value={this.state.category_id}
            onChange={(e) => this.setState({ category_id: e.target.value })}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.data.map((item, i) => (
            <li key={i}>
              <ReactPlayer
                width="480px"
                height="360px"
                controls
                url={item.url}
              />
              <br />
              {item.name}
              <button id={item.id} onClick={this.deleteVideo}>
                Delete
              </button>
              <br />
              {/* <button
                id={item.id}
                onClick={() => this.setState({ isEditable: true })}
              >
                Update
              </button> */}
              {/* {this.state.isEditable ? (
                <EditForm
                  updateImage={this.updateImage}
                  notEditable={() => this.setState({ isEditable: false })}
                  id={item.id}
                />
              ) : (
                <></>
              )} */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default AdminPage;
