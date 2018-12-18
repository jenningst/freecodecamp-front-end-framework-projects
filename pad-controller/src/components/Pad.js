import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    
    handleClick = (e) => {
        alert(e.currentTarget.value);
        //loadDisplayText = { this.loadDisplayText }
    }
    
    render() {
        return <button 
            className="drum-pad"
            onClick={this.handleClick}
            >
            <audio 
                className="drum-pad__actuator clip" 
                id={this.props.pad.keyMapping} 
                src={this.props.pad.clipSource}
            />
            <div className="drum-pad__label">
                <p className="label-id">PAD {this.props.pad.keyMapping}</p>
                <p className="label-alt">{this.props.pad.altFunction}</p>
            </div>
          </button>;
    }
}

Pad.propTypes = {

};

export default Pad;