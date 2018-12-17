import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
    
    handleChange = (event) => {
        //const updatedText = this.props.text + event.currentTarget.value;
        this.props.updateText(event.currentTarget.value);
    }
    
    render() {
        return <div>
            <textarea name="markdown" onChange={this.handleChange} />
          </div>;
    }
}

Editor.propTypes = {

};

export default Editor;