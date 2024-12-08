import React from "react";

class ProjectThumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="project" href={this.props.projLink} target="_blank">
                <img src={this.props.projImg} alt="Project Photo" />
                <h2>{this.props.projTitle}</h2>
                <p>{this.props.projDesc}</p>
            </a>
        );
    }
}

export default ProjectThumbnail;