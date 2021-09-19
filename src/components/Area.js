import React from "react";

export const Area = ({ title, body, skill, classArea}) => {
    return (
        <div className={`container-milestone area ${ classArea }`}>
            <h3 className="title">Areas</h3>
            <div className="indicator">
                <div className="indicator-item indicator--left">{ title }</div>
                <div className="indicator-item indicator--rigth">Social & emotional</div>
            </div>
            <hr className="divider" />
            
            <h2 className="skill">Skill: { skill }</h2>
            <p className="text-center mt-4">{ body }</p>
        </div>
    );
}