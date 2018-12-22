import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    audioRef = React.createRef();

    playSound = () => {
        this.audioRef.current.play();
    }

    render() {
        return <div className="drum-pad">
            <a className="drum-pad__link" href="#0" onClick={this.playSound}/>
            <audio className="clip" src={this.props.details.clipSource} ref={this.audioRef} />
            <div className="drum-pad__label">
              <p className="label-item label-id">
                PAD {this.props.details.keyBinding}
              </p>
              <p className="label-item label-alt">
                {this.props.details.altFunction}
              </p>
            </div>
          </div>;
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

