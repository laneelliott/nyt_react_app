import React from "react";

const Article = (props) => 
    <div className="well">
        <h3 className="articleHeadline">
            <span className="label label-primary">{props.id}</span>
            <strong> {props.title}</strong>
        </h3>
        <h5>By {props.author}</h5>
    </div>

export default Article;