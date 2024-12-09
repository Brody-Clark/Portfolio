import React from 'react';
import photo from "../Resources/unity-action-platformer.jpg"
import './Styles/AboutMe.css'

class AboutMeContent extends React.Component {

    render() {
        return (
            <div className="main-container about-me">
                <h2 className="section-title">About Me</h2>
                <div className="info-container">
                    <p> Hello, My name is Brody Clark, I am a a software developer working in the automotive industry.
                       I have experience with multiple programming languages and
                        frameworks and have worked on both legacy and greenfield applications.
                        I enjoy working with 3D tools like Unreal Engine and Unity and trying to recreate mechanics
                        from
                        my favorite games. I also enjoy developing websites like this one!
                    </p>
                    <img src={photo} alt="Game Engine Editor" />
                </div>
            </div>
        );
    }
}

export default AboutMeContent;