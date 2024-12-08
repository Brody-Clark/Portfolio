import React from "react";
import ProjectThumbnail from './ProjectThumbnail';
import CountryAppImg from '../Resources/country-weather.png';
import DragDropImg from '../Resources/drag-drop.png';
import GroceryAppImg from '../Resources/react-grocery-app.png';
import PortfolioTemplateImg from '../Resources/portfolio.png';

class ProjectsContent extends React.Component {

    render() {
        return (
            <div className="main-container projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects-container">
                    <ProjectThumbnail projImg={DragDropImg} projTitle="Drag and Drop"
                        projLink="https://github.com/Brody-Clark/MET-CS-601-HW2"
                        projDesc="Web page that demos drag and drop functionality using callbacks in JavaScript"></ProjectThumbnail>
                    <ProjectThumbnail projImg={CountryAppImg} projTitle="Country Weather App"
                        projLink="https://github.com/Brody-Clark/MET-CS-601-HW4"
                        projDesc="Simple Web page programmed in TypeScript that shows countries and their weather."></ProjectThumbnail>
                    <ProjectThumbnail projImg={PortfolioTemplateImg} projTitle="Portfolio Template"
                        projLink="https://github.com/Brody-Clark/MET-CS-601-HW3"
                        projDesc="Portfolio Template with button hovers written using only CSS and HTML"></ProjectThumbnail>
                    <ProjectThumbnail projImg={GroceryAppImg} projTitle="Grocery Inventory App"
                        projLink="https://github.com/Brody-Clark/MET-CS-601-HW5"
                        projDesc="Demonstrates knowledge of React to create a grocery store web page"></ProjectThumbnail>
                </div>
            </div>
        );
    }
}

export default ProjectsContent;