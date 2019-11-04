import React from "react";

const Title = (props) => {
    return (
        <div className="title text-title">
            <h1>
                {props.name} <strong className="text-blue">{props.title}</strong>
            </h1>
        </div>
    )
}

export default Title;