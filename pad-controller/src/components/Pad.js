import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    audioRef = React.createRef();

    handleClick = (key) => {        
        // this.props.setDisplayText(key);
        // this.props.playSound(key);
        this.audioRef.current.play();
    }

    render() {
        return <button id={this.props.details.clipDesc} className="drum-pad" onClick={this.handleClick}>
            {this.props.details.keyBinding.toUpperCase()}
            {/* <a className="drum-pad__link" href="#0" onClick={this.playSound}/> */}
            <audio className="clip" id={this.props.details.keyBinding.toUpperCase()} src={this.props.details.clipSource} ref={this.audioRef} />
            {/* <div className="drum-pad__label">
              <p className="label-item label-id">
                PAD {this.props.details.keyBinding}
              </p>
              <p className="label-item label-alt">
                {this.props.details.altFunction}
              </p>
            </div> */}
          </button>;
    }
}

export default Pad;

{/* <a className="drum-pad" href="#0" onClick={this.handleClick}>
    <div className="pad-container">
        <audio className="clip" src={this.props.details.clipSource} ref={this.audioRef} />
        <div className="drum-pad__label">
            <p className="label-id">PAD {this.props.details.keyMapping}</p>
            <p className="label-alt">{this.props.details.altFunction}</p>
        </div>
    </div>
</a>; */}

