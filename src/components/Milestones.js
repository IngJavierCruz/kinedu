import React from "react";
import Milestone from "./Milestone";

export const Milestones = ({ milestones }) => {
  console.log(milestones);
  return (
    <div className="container-milestone">
      {
        milestones.map((x) => <Milestone key={x.id} {...x} />)
      }
    </div>
  );
}