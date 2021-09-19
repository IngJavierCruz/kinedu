import React from "react";
import { useSelector } from 'react-redux';
import { Milestone } from "./Milestone";

export const Milestones = ({type}) => {
    const { milestones } = useSelector(state => state.indicator);

    return (
        <div className="container-milestone">
            {
                milestones.filter(x => x.typeSkill === type)
                .map((x, i) =>  <Milestone key={i} {...x }  /> )
            }
        </div>
    );
}