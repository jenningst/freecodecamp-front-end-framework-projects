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
      <div className="pane editor-pane">
        <h2 className="editor-pane__header">Editor</h2>
        <textarea
          id="editor"
          rows="35"
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