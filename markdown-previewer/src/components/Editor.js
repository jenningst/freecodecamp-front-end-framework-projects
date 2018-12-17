import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  handleChange = event => {
    this.props.updateText(event.currentTarget.value);
  };

  render() {
    return (
      <div
        id="editor" className="pane">
        <textarea
          name="markup"
          value={this.props.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Editor.propTypes = {

};

export default Editor;