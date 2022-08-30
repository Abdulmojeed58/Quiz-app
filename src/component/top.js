import React from "react";

export default function TopPage(props) {
    return (
        <div className="top-page">
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button onClick={props.handleChange}>Start quiz</button>
        </div>
    )
}