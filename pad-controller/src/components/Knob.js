import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Knob extends Component {
    render() {
        return <div className="knob">
            <div className="knob__actuator" />
            <div className="knob__label" />
          </div>;
    }
}

Knob.propTypes = {

};

export default Knob;