import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Milestones } from './../Milestones';
import { Area } from './../Area';
import { changeAreaSkill } from "../../actions/indicator";
import { scrollToBottom } from "../../helpers/scrollView";
import Swal from "sweetalert2";

export const MilestoneScreen = () => {
  
  const dispatch = useDispatch();
  const { milestones, areaActive, areas } = useSelector(state => state.indicator);

  const isLast = areas.length === areaActive.position + 1;
  const areaPrevieOrNext = isLast 
    ? { ...areas[areaActive.position -1], isFirst: true } 
    : { ...areas[areaActive.position +1], isFirst: false };

  const area = {
    ...areaActive,
    areaPrevieOrNext,
    milestones: milestones.filter(x => x.typeSkill === areaActive.type)
  }
  
  const navegateSection = () => {
    dispatch( changeAreaSkill( areaActive.position + 1));
  }
  
  const finishAssessment = () => {
    Swal.fire({
      icon: "success",
      title: "¡Congratulations your milestones have been saved!",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showConfirmButton: false,
      timer: 2500
    })
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
              className="btn-next animate__animated " 
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