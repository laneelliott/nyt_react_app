import React from "react";

export const Dropdown = (props) =>

    <div className="form-group">
        <label htmlFor={props.htmlFor}>{props.title}</label>
        <select className="form-control">
            <option value="1">1</option>
			<option value="5">5</option>
            <option value="10">10</option>
        </select>
    </div>;

 