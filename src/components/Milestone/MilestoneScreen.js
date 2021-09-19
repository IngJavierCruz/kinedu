import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Milestones } from './../Milestones';
import { Area } from './../Area';
import { changeAreaSkill } from "../../actions/indicator";
import { scrollToBottom } from "../../helpers/scrollView";

export const MilestoneScreen = () => {
  
  const dispatch = useDispatch();
  const { milestones, areaActive, areas } = useSelector(state => state.indicator);
  const isLast = areas.length === areaActive.position + 1;
  const area = {
    ...areaActive,
    milestones: milestones.filter(x => x.typeSkill === areaActive.type)
  }
  
  
  const navegateSection = () => {
    dispatch( changeAreaSkill( areaActive.position + 1));
  }
  
  const finishAssessment = () => {
    alert("finish");
  }

  const areaRef = useRef(null);
  useEffect(() => scrollToBottom(areaRef), [areaRef, areaActive]);

  return (
    <div className="container container-wrapper" ref={areaRef}>
      <div className="card  animate__animated animate__fadeInDown" >
        <Area className="card-body" { ...area } />
        <Milestones className="card-body" {...area } />
        {
          isLast 
          ? <button 
              className="btn-next animate__animated animate__fadeInLeft" 
              onClick={ finishAssessment }>
                Finish assessment
            </button>
          : <button 
              className="btn-next animate__animated animate__fadeInLeft" 
              onClick={ navegateSection }>
                Next
            </button>
        }
      </div>
    </div>
  );
}