import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Milestones } from './../Milestones';
import { Area } from './../Area';
import { changeAreaSkill } from "../../actions/indicator";

export const MilestoneScreen = () => {
  const dispatch = useDispatch();
  const { milestones, areaActive } = useSelector(state => state.indicator);

  const area = {
    ...areaActive,
    milestones: milestones.filter(x => x.typeSkill === areaActive.type)
  }

  const navegateSection = () => {
    dispatch( changeAreaSkill( 0 ));
  }

  return (
    <div className="container container-wrapper">
      <div className="card shadow animate__animated animate__fadeInDown">
        <Area className="card-body" { ...area } />
        <Milestones className="card-body" {...area } />
        <button 
          className="btn-next animate__animated animate__fadeInLeft" 
          onClick={ navegateSection }>Next</button>
      </div>
    </div>
  );
}