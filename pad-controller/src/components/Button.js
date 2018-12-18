import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return <div className="button">
            <div className="button__actuator" />
            <div className="button__label" />
          </div>;
    }
}

Button.propTypes = {

};

export default Button;