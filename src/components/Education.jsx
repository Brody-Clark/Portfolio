import React from "react";
import './Styles/Education.css';

class Education extends React.Component {

    render() {
        return (
            <div class="main-container education">
                <h2 class="section-title">Education</h2>
                <div class="schools-container">
                    <div class="school-info-container">
                        <div>
                            <h3 className="school-name">Penn State</h3>
                            <p>2015-2021</p>
                        </div>
                        <ul>
                            <li>Graduated in 2021 with B.S in Aerospace Enineering.</li>
                            <li>Studied programming and vehicle autonomy and simulation</li>
                            <li>As my Capstone project I creatd a fully autonomous drone capable of landing on designated targets.</li>
                        </ul>
                    </div>
                    <div class="school-info-container">
                        <div>
                            <h3 className="school-name">Boston University</h3>
                            <p>2024-Present</p>
                        </div>
                        <ul>
                            <li>Currently pursuing M.S in Computer Science.</li>
                            <li>Created applications in python and web pages using React.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;