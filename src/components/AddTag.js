import React, { Component } from "react";
import "./add-tag.css";

class AddTag extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  clear() {
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="add-tag">
        <form
          onSubmit={e => {
            this.props.submitHandler(
              this.clear(),
              this.props.id,
              this.state.content,
              e
            );
          }}
        >
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Add a tag"
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTag;
