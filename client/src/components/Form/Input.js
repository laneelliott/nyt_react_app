import React from "react";

export const Input = (props) =>

    <div className="form-group">
        <label htmlFor={props.htmlFor}>{props.title}</label>
        <input type="text" className="form-control" {...props} />
    </div>