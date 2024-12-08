import React, { Component } from 'react'

class BodyContentWrapper extends React.Component{

    render(){
        return(
        <div id={this.props.id} className="main-container-wrapper">
            {this.props.content}
        </div>
        );
    }
}

export default BodyContentWrapper;