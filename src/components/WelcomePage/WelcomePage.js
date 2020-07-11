import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import "./WelcomePage.css";
//import axios from "axios";
import { connect } from "react-redux";

//this component is for taking input on how the user feels supported
class WelcomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_GIFS" });
  }
  next = () => {
    this.props.history.push("/home"); //takes customer to next "page"
  };

  render() {
    return (
      <div className="text-center">
        {console.log(this.props.gif)}
        <h2>Welcome to the Tennis Gurus site</h2>
        <p>
          <b>
            <i>
              Hi. Ever wondered what it would be like to be a tennis guru. I'm
              not talking about playing in the Roland Garros necessarily, but
              being able to participate in friendly tournaments with friends and
              crushing it.
              <br />
              Well, you are in the right place. This site is dedicated to teach
              you in all things tennis related and in no time you should be well
              on your way to becoming the player of your dreams.
            </i>
          </b>
        </p>
        <span>
          <img src={this.props.gif.url} alt={"giphy"}></img>
        </span>
        <br />
        <Button variant="contained" color="primary" onClick={this.next}>
          Enter the site
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gif: state.giphyReducer,
});

export default withRouter(connect(mapStateToProps)(WelcomePage));
