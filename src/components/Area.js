import React from "react";
import { Indicators } from './Indicators';

export const Area = (area) => {
    const { body, skill, classArea } = area;

    return (
        <div className={`container-milestone area ${ classArea }` }>
            <h3 className="title">Areas</h3>
            <div className="indicator">
                <Indicators  { ...area } />
            </div>
            <hr className="divider" />
            
            <h2 className="skill">Skill: { skill }</h2>
            <p className="text-center mt-4">{ body }</p>
        </div>
    );
}