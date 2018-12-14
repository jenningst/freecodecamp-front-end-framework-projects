import React from 'react';
//import PropTypes from 'prop-types';

class Quote extends React.Component {
    static propTypes = {

    }

    render() {
        return <div id="quote-box" className="quote-box">
            <h1 id="text" className="text">
              {this.props.quote}
            </h1>
            <p id="author" className="author">
              {this.props.author}
            </p>
            <button id="new-quote" className="new-quote btn btn-default" onClick={this.props.loadQuote}>
              Get New Quote
            </button>
            <a id="tweet-quote" className="btn btn-default" href="twitter.com/intent/tweet">Tweet Quote</a>
          </div>;
    }
}

Quote.propTypes = {

};

export default Quote;