import React from "react";
import { Milestone } from "./Milestone";

export const Milestones = () => {
    const datas = [1, 2, 3, 4];
    return (
        <div className="container-milestone">
            {
                datas.map(x =>  <Milestone key={x} /> )
            }
        </div>
    );
}