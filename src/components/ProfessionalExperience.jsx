import React from "react";
import ExperienceBlock from './ExperienceBlock';
import UnrealImg from '../Resources/unreal-engine-5.jpg';
import GoogleTestImg from '../Resources/google-test.png';
import VisualStudioImg from '../Resources/visual-studio.png';
import AnalyticsImg from '../Resources/elk-analytics.png';

class Experience extends React.Component {

    render() {
        return (
            <div class="main-container work-experience">
                <h2 class="section-title">Professional Experience</h2>
                <ExperienceBlock img={UnrealImg} imgAlt="Unreal Editor" title="Unreal Engine"
                    listExp={['Developed a high-perfomrance VR application for automotive designers',
                        'Created custom editor layout and editor tools',
                        'Wrote several plugins using Blueprints and C++',
                        'Worked with shaders and stencil buffers to create outline and cross-section effects',
                        'Developed multiplayer game logic']}>
                </ExperienceBlock>
                <ExperienceBlock img={AnalyticsImg} imgAlt="ELK Analytics" title="Data Analytics"
                    listExp={['Wrote market research application using pandas Python library',
                        'Assisted in migrating a Microsoft Access app to Python with visualization in Power BI',
                        'Led initive to track and analyze user behavior in a C++ desktop application using Filebeat and Eliasticsearch']}>
                </ExperienceBlock>
                <ExperienceBlock img={VisualStudioImg} imgAlt="Visual Studio IDE" title="Tooling/Automation"
                    listExp={[
                        'Created platform-independent interfaces for business tools using wxWidgets',
                        'Developed CAD tool plugins for engineering team',
                        'Automated developer tasks with pre and post buid events in Visual Studio',
                        'Developed custom Unreal Engine commandlets to perform pre-build cleanup',
                        'Migrated repo from Azure DevOps to GitHub and wrote CI/CD pipeline'
                    ]}>
                </ExperienceBlock>

                <ExperienceBlock img={GoogleTestImg} imgAlt="Google Test" title="Unit Testing"
                    listExp={[
                        'Experience creating unit tests using GoogleTest and NUnit',
                        'Added unit tests to legacy applications to meet business code standards',
                        'Added automated testing to build pipelies'
                    ]}>
                </ExperienceBlock>
            </div>
        );
    }
}

export default Experience;