import React from "react";

export const Area = () => {
    const skill = "Secure attachment";
    return (
        <div className="container-milestone area">
            <h2 className="title">Areas</h2>
            <div className="indicator">
                <div className="indicator-item indicator--left">Physical</div>
                <div className="indicator-item indicator--rigth">Social & emotional</div>
            </div>
            <hr className="divider" />
            
            <h2 className="skill">Skill: {skill}</h2>
            <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the 
                leap into electronic typesetting, remaining essentially 
                unchanged. It was popularised in the 1960s with the release 
                of Letraset sheets containing Lorem Ipsum passages, and more
                 recently with desktop publishing software like Aldus PageMaker 
                 including versions of Lorem Ipsum.
            </p>
        </div>
    );
}