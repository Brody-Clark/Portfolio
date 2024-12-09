import React from 'react';
import SearchBar from "./SearchBar";
import './Styles/NavBar.css';

class TopNavBar extends React.Component {

    render() {
        return (
            <div className="top-link-bar">
                <nav className="site-tabs-wrapper">
                    <a className="site-link" href="#about-me">About Me</a>
                    <a className="site-link" href="#education">Education</a>
                    <a className="site-link" href="#work-experience">Experience</a>
                    <a className="site-link" href="#projects">Projects</a>
                    <a className="site-link" href="#blog">Blog</a>
                    <a className="site-link" href="#contact-me">Get in Touch</a>
                </nav>
                <SearchBar></SearchBar>
            </div>
        );
    }
}

export default TopNavBar;