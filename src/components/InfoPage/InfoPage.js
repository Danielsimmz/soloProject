import React, { Component } from "react";
import Axios from "axios";
// import EditForm from "../EditForm/EditForm";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  state = {
    data: ["fuck", "fuck2"],
    description: "",
    image_url: "",
    isEditable: false,
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    Axios.get("/api/shelf/")
      .then((result) => {
        this.setState({
          data: [...result.data],
        });
      })
      .catch((error) => console.log(error));
  };

  postImage = () => {
    console.log("in onSubmit");
    Axios.post("/api/shelf", {
      image_url: this.state.image_url,
      description: this.state.description,
    })
      .then((result) => {
        this.setState({ description: "", image_url: "" });
        this.getImages();
      })
      .catch((error) => console.log(error));
  };

  deleteImage = (event) => {
    console.log("In delete");
    Axios.delete(`/api/shelf/${event.target.id}`)
      .then((result) => this.getImages())
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

        <form onSubmit={() => this.postImage()}>
          Image URL:
          <input
            type="text"
            value={this.state.image_url}
            onChange={(e) => this.setState({ image_url: e.target.value })}
          />
          <br />
          Description:
          <textarea
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.data.map((item, i) => (
            <li key={i}>
              <img
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  boxShadow: "0px 25px 50px -25px rgba(0,0,0,0.75)",
                }}
                src={item.image_url}
                alt={item.description}
              ></img>
              <br />
              {item.description}
              <button id={item.id} onClick={this.deleteImage}>
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

export default InfoPage;
