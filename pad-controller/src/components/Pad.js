import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }
//   static propTypes = {
//     details: PropTypes.shape({
//       altFunction: PropTypes.string,
//       clipSource: PropTypes.string,
//       desc: PropTypes.string,
//       keyMapping: PropTypes.string
//     }),
//     keyMapping: PropTypes.string
//   };

  playAudio = () => {
    //alert(this.audioRef);
  };

  handleClick = () => {
      this.props.loadDisplayText('test');
      this.playAudio();
  }

  handleKeyPress = (event) => {
      switch(event.charCode) {
        case 1:
        // play the first pad sound
        alert("1");
        case 2:
            // play the second pad sound
              alert("1");
        default:
      }
  }

  render() {
    return <button className="drum-pad" onClick={this.handleKeyPress}>
        <audio>
          <source src={this.props.details.clipSource} type="audio/mp3" ref={this.audioRef} />
        </audio>
        <div className="drum-pad__label">
          <p className="label-id">PAD {this.props.details.keyMapping}</p>
          <p className="label-alt">{this.props.details.altFunction}</p>
        </div>
      </button>;
  }
}

export default Pad;