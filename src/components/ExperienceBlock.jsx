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
            <div className="experience-block">
                <div className="image-wrapper">
                    <img src={this.props.img} alt={this.props.imgAlt} />
                </div>
                <div className="text">
                    <h2>{this.props.title}</h2>
                    <ul className="experience-info">
                        {this.listDesc}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExperienceBlock;