import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
    
    handleChange = (event) => {
        this.props.updateText(event.key);
    }
    
    render() {
        return <div>
            <textarea name="editor-pane" id="editor" cols="30" rows="10" onKeyDown={this.handleChange} />
          </div>;
    }
}

Editor.propTypes = {

};

export default Editor;