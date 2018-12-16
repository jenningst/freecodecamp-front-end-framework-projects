import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
    render() {
        return (
            <div>
                <textarea name="editor-pane" id="editor" cols="30" rows="10"></textarea>
            </div>
        );
    }
}

Editor.propTypes = {

};

export default Editor;