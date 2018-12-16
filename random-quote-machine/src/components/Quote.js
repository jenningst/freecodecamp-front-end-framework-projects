import React from 'react';
import PropTypes from 'prop-types';

class Quote extends React.Component {
    static propTypes = {
      quote: PropTypes.string,
      author: PropTypes.string
    }

    render() {
        return <div id="quote-box" className="quote-box">
            <h1 id="text" className="quote-box__text">
              "{this.props.quote}"
            </h1>
            <p id="author" className="quote-box__author">
              {this.props.author}
            </p>
            <div className="btn-container">
              <button id="new-quote" className="quote-box__new-quote " onClick={this.props.loadQuote}>
                <img src="/assets/larry.png" className="new-quote-img btn-img" title="Click for a new quote!" alt="larry head"/>
              </button>
              <a id="tweet-quote" className="quote-box__tweet" target="_blank" href="twitter.com/intent/tweet">
                <img src="/assets/twitter-icon.png" className="tweet-img btn-img" title="Tweet quote!" alt="twitter icon" />
              </a>
            </div>
          </div>;
    }
}

export default Quote;