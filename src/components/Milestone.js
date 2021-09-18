import React from "react";
import { ButtonMilestone } from "./ButtonMilestone";

export const Milestone = () => {
    const data = {
        title: "Bables like imitanting conversation.",
        subtitle: "Usually",
        ageRange: ""
    };

    return (
        <div className="milestone">
            <div>
                <h5 className="card-title title">{ data.title }</h5>
                <p className="card-text">{ data.subtitle }</p>
                <h6>{ data.ageRange }</h6>
            </div>
            <div className="d-flex align-items-center">
                <ButtonMilestone  />
            </div>
        </div>
    );
}