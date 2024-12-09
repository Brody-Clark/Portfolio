import React from "react"
import './Styles/ExperienceBlock.css'

class ExperienceBlock extends React.Component{
    constructor(props){
        super(props);
    }

    listDesc = this.props.listExp.map((exp,index) =>
        <li key={index} >{exp}</li>
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