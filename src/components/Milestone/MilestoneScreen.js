import React from "react";
import { useSelector } from 'react-redux';
import { Milestones } from './../Milestones';
import { Area } from './../Area';

export const MilestoneScreen = () => {
  const { milestones } = useSelector(state => state.indicator);
  const areaActive  = areas[0];

  const area = {
    ...areaActive,
    milestones: milestones.filter(x => x.typeSkill === areaActive.type)
  }

  const navegateSection = () => {
    alert();
  }


  return (
    <div className="container container-wrapper">
      <div className="card shadow">
        <Area className="card-body" { ...area } />
        <Milestones className="card-body" {...area } />
        <button className="btn-next" onClick={ navegateSection }>Next</button>
      </div>
    </div>
  );
}

const areas = [
  {
    id: 1,
    title: "Physical",
    skill: "Standing up",
    type: "physical",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    title: "Social & emotional",
    skill: "Secure attachment",
    type: "socialAndEmocional",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
];