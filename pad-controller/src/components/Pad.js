import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    static propTypes = {
        index: PropTypes.string,
        desc: PropTypes.string,
        code: PropTypes.number,
        sound: PropTypes.string,
        playSound: PropTypes.func,
        setDisplayText: PropTypes.func
    }
    
    handleClickOrPress = (e) => {
        // handle sound and display text
        if ((e.type === 'keydown' && e.keyCode === this.props.code) || e.type === 'click') {
            this.props.playSound(this.props.index);
            this.props.setDisplayText(this.props.desc);
        }
        // button formatting
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleClickOrPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleClickOrPress);
    }
    
    render() {
        return <div className="pad-container">
            <div 
                id={this.props.desc} 
                className="drum-pad" 
                onClick={this.handleClickOrPress} 
                onKeyDown={this.handleClickOrPress}>
                <audio id={this.props.index} className="clip" src={this.props.sound} />
                <span className="drum-pad__binding">{this.props.index}</span>
            </div>
            <div className="drum-pad__label">
                <div className="pad-id">PAD {this.props.index}</div>
                <div className="pad-func">{this.props.func}</div>
            </div>
        </div>
    }
}

export default Pad;