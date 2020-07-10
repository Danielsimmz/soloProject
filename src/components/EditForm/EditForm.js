import React, { Component } from "react";

class EditForm extends Component {
  state = {
    description: "",
    image_url: "",
  };

  render() {
    return (
      <>
        <form
          id={this.props.id}
          onSubmit={() => {
            this.props.updateImage(event);
            this.props.notEditable();
          }}
        >
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
      </>
    );
  }
}

export default EditForm;
