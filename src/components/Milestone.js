import React from "react";
import { ButtonMilestone } from "./ButtonMilestone";

export const Milestone = ({ title, subtitle, ageRange, state, id }) => {
    return (
        <div className="milestone">
            <div>
                <h5 className="card-title title">{ title }</h5>
                <p className="card-text subtitle">{ subtitle }</p>
                <h6>{ ageRange }</h6>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <ButtonMilestone key={id} state={state}  />
            </div>
        </div>
    );
}