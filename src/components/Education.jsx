import React, { useSyncExternalStore } from "react";
import PennStateImg from '../Resources/PSU.png';
import BostonImg from '../Resources/BU.png';

class Education extends React.Component {

    render() {
        return (
            <div class="main-container education">
                <h2 class="section-title">Education</h2>
                <div class="schools-container">
                    <div class="school-info-container">
                        <img src={PennStateImg} alt="Penn State" />
                        <p>I gradutaed from Penn State with a bachelors of Science degree in Aerospace Enineering in
                            2021.
                            I placed my focus on vehicle autonomy and simulation, and programming. As my Capstone
                            projcet I creatd a fully autonomous drone capable of landing on designated targets.
                        </p>
                    </div>
                    <div class="school-info-container">
                        <img src={BostonImg} alt="Boston University" />
                        <p>I am currently obtaining my Masters dgree from Boston University studying Computer
                            Science.
                            I have created applications in python and web pages using React.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;