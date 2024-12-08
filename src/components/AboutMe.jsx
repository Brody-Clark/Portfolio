import React from 'react';
import photo from "../Resources/unity-sample.png"

class AboutMeContent extends React.Component {

    render() {
        return (
            <div class="main-container about-me">
                <h2 class="section-title">About Me</h2>
                <div class="info-container">
                    <p> Hello, My name is Brody Clark. i am a a software developer.
                        since 2021 I have been working at General Motors developing immersive tools for
                        designers and engineers. I have experience with multiple programming languages and
                        frameworks and have worked on both legacy and greenfield applications.
                        I enjoy working with 3D tools like Unreal Engine and Unity and trying to recreate mechanics
                        from
                        my favorite games. I also develop enjly developing websites like this one. Please read on to
                        learn more!
                    </p>
                    <img src={photo} alt="Game Engine Editor" />
                </div>
            </div>
        );
    }
}

export default AboutMeContent;