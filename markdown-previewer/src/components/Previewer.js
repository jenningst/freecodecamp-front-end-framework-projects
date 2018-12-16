import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Previewer extends Component {
    render() {
        return (
            <div>
                <textarea name="preview-pane" id="preview" cols="30" rows="10"></textarea>
            </div>
        );
    }
}

Previewer.propTypes = {};

export default Previewer;