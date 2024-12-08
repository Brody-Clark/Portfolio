import React from "react";

class ExperienceBlock extends React.Component{
    constructor(props){
        super(props);
    }

    listDesc = this.props.listExp.map(exp =>
        <li>{exp}</li>
    );

    render(){
        return(
            <div class="experience-block">
                <div class="image-wrapper">
                    <img src={this.props.img} alt={this.props.imgAlt} />
                </div>
                <div class="text">
                    <h2>{this.props.title}</h2>
                    <ul class="experience-info">
                        {this.listDesc}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExperienceBlock;