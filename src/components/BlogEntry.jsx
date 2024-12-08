import React from "react";

class BlogEntry extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blog-entry-wrapper">
                <h2 className="entry-title">
                    <a className="blog-entry-link" href={`${this.props.link}`} target="_blank">
                        {this.props.title}
                    </a>
                </h2>
                <p className="entry-desc">{this.props.desc}</p>
                <hr />
                <time className="entry-date">{this.props.time}</time>
            </div>
        );
    }
}

export default BlogEntry;