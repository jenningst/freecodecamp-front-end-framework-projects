import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Previewer extends Component {
    render() {
        return (
            <div>
                <textarea name="markdown" value={this.props.text} />
            </div>
        );
    }
}

export default Previewer;