import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    audioRef = React.createRef();
    
    handleClick = (key) => {        
        this.props.setDisplayText(this.props.details.keyBinding);
        this.props.playSound(this.props.details.keyBinding);
        //this.audioRef.current.play();
    }
    
    render() {
        const { func, source, desc, binding } = this.props.details;
        return <button id={desc} className="drum-pad" onClick={this.handleClick}>
            {binding}
            {/* <a className="drum-pad__link" href="#0" onClick={this.playSound}/> */}
            <audio className="clip" id={binding} src={source} ref={this.audioRef} />
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

