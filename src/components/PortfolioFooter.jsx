import React from 'react';

class PortfolioFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr />
                <div className='social-link-wrapper'>
                    <p>Follow me at:</p>
                    <div className="social-links">
                        <a className="social-icon" id="LinkedIn" href="https://www.linkedin.com/in/brody-clark-ba40991b4"
                            target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="social-icon" id="GitHub" href="https://github.com/Brody-Clark" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                </div>
                <small className="copyright">© 2024 Brody Clark. All rights reserved.</small>
            </div>
        );

    }
}

export default PortfolioFooter;