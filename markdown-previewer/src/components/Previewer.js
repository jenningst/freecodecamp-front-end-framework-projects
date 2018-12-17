import React, { Component } from 'react';
import PropTypes from "prop-types";

class Previewer extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  markUp = text => {
    let Remarkable = require("remarkable");
    let md = new Remarkable();
    return md.render(text);
  };

  render() {
    const textToBeRendered = this.markUp(this.props.text);
    return (
      <div
        id="preview"
        className="pane"
        dangerouslySetInnerHTML={{ __html: textToBeRendered }}
      />
    );
  }
}

export default Previewer;