import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    audioRef = React.createRef();

    handleClick = () => {
        this.audioRef.current.play();
    }

    handleKeyDown = (e, name) => {
        this.props.loadDisplayText(name);
    }

    handleKeyPress = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === this.props.keyCode) {
            //this.props.play(this.props.value, this.props.audioID);
            this.audioRef.current.play();
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return <div className="drum-pad">
            <a className="drum-pad__link" href="#0" onClick={this.handleKeyPress} />
            <audio className="clip" src={this.props.details.clipSource} ref={this.audioRef} />
            <div className="drum-pad__label">
              <p className="label-item label-id">
                PAD {this.props.details.keyMapping}
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

