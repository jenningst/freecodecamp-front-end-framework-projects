import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    static propTypes = {
        sound: PropTypes.string
    }

    setDisplay = () => {
        return { __html: this.props.sound };
    }
    
    render() {
        return <div id="display" className="display" dangerouslySetInnerHTML={this.setDisplay()}></div>
    }
}

export default Display;