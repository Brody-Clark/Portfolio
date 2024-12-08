import React from "react";
import BlogEntry from './BlogEntry';

class BlogWrapper extends React.Component {

    render() {
        return (
            <div className=" main-container blog">
                <h2 className="section-title">Blog</h2>
                <div className="blog-container">
                    <BlogEntry title="Design Benefits of Modern Layout Tools in CSS3" desc="description of blog"
                        link="https://onlinecampus.bu.edu/webapps/discussionboard/do/message?action=list_messages&course_id=_146989_1&nav=group_forum&group_id=_342701_1&conf_id=_441504_1&forum_id=_971213_1&message_id=_11185637_1" time="7 Nov 2024">
                    </BlogEntry>
                    <BlogEntry title="Effects of BigInt on Modern JavaScript Development" desc="description of blog"
                        link="https://onlinecampus.bu.edu/webapps/discussionboard/do/message?action=list_messages&course_id=_146989_1&nav=group_forum&group_id=_342701_1&conf_id=_441504_1&forum_id=_971214_1&message_id=_11198397_1" time="29 Nov 2024">
                    </BlogEntry>
                    <BlogEntry title="Performance Benefits of Scroll-Driven Animations and Popover" desc="description of blog" 
                    link="https://onlinecampus.bu.edu/webapps/discussionboard/do/message?action=list_messages&course_id=_146989_1&nav=group_forum&group_id=_342701_1&conf_id=_441504_1&forum_id=_971217_1&message_id=_11223262_1" time="29 Nov 2024">
                    </BlogEntry>
                    <BlogEntry title="Comparison of TypeScript and JavaScript" desc="description of blog"
                    link="https://onlinecampus.bu.edu/webapps/discussionboard/do/message?action=list_messages&course_id=_146989_1&nav=group_forum&group_id=_342701_1&conf_id=_441504_1&forum_id=_971215_1&message_id=_11247783_1" time="29 Nov 2024">
                    </BlogEntry>
                </div>
            </div>
        );
    }
}

export default BlogWrapper;