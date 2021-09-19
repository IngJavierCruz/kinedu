import React from "react";
import { ButtonMilestone } from "./ButtonMilestone";

const Milestone = ({ id, title, subtitle, ageRange, state }) => {
    const data = { id, state };
    return (
        <div className="milestone animate__animated animate__fadeInUp">
            <div>
                <h5 className="card-title title">{ title }</h5>
                <p className="card-text subtitle">{ subtitle }  { ageRange }</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <ButtonMilestone key={id} {...data }  />
            </div>
        </div>
    );
}

export default React.memo(Milestone);