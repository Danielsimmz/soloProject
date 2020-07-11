import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import ReactPlayer from "react-player";

class DetailsPage extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the Movie details from the API
    this.props.dispatch({ type: "FETCH_VIDEOSS" });
  }

  componentWillUnmount() {
    // use component will unmount to store info for page so that when you come back to page the info reloads with did mount
    this.props.dispatch({ type: "FETCH_VIDEOSS" });
  }

  //this function loops through the array of videos and finds the ones that match with the category that was clicked
  mountVideos = () => {
    for (let object of this.props.video) {
      if (this.props.category.name === object.name) {
        console.log(object);

        return (
          <ReactPlayer
            width="480px"
            height="360px"
            controls
            url={object.videos}
          />
        );
      }
    }
  };
  render() {
    return (
      <>
        <div className="text-center">
          <Button
            className="categoryButton"
            variant="outlined"
            color="primary"
            type="submit"
            style={{ postion: "fixed", top: "1px", left: "1px" }}
            onClick={() => this.previous()}
          >
            Back to List
          </Button>
          <h3>
            This is the Videos associated with Category:{" "}
            {this.props.category.name}
          </h3>
          <p>{this.props.details.title}</p>

          <p>{this.props.details.description}</p>
          <br />
          <span id="video">{this.mountVideos()}</span>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  category: state.showCategory,
  video: state.videoss,
});

export default withRouter(connect(mapStateToProps)(DetailsPage));
