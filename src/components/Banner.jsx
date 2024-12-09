import React from 'react'
import TopNavBar from './TopNavBar'
import Avatar from '../Resources/avatar.jpg'
import Resume from '../Resources/Brody_Clark_Resume.pdf'
import './Styles/Banner.css'

class Banner extends React.Component {

    render() {
        return (
            <div>
                <TopNavBar></TopNavBar>
                <div className="intro-overlay-wrapper">
                    <div className="avatar-wrapper">
                        <img className="avatar" src={Avatar} alt="Brody Clark" />
                    </div>
                    <div className="info-wrapper">
                        <div className="info">
                            <h2 className="name">Brody Clark</h2>
                            <p className="skills">3D Fullstack Tools DevOps</p>
                            <a href={Resume} target="_blank" download="Brody Clark"
                                className="button-round button-text resume">
                                <span>
                                    <span>Download Resume</span>
                                    <svg width="12" height="12" viewBox="0 0 11 11"
                                        xmlns="http://www.w3.org/2000/svg" className="right-arrow">
                                        <path
                                            d="M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z">
                                        </path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;