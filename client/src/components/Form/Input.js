import React from "react";

export const Input = (props) =>

    <div className="form-group">
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input type="text" className="form-control" id={props.id} {...props} />
    </div>