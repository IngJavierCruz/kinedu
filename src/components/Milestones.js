import React from "react";
import { Milestone } from "./Milestone";

export const Milestones = () => {
    const datas = [
        {
            id: 1,
            title: "Babbles like imitating conversation.",
            subtitle: "",
            agaRange: "",
            state: "Complete"
        },
        {
            id: 2,
            title: "Babbles like imitating conversation.",
            subtitle: "Usually achieved by:",
            agaRange: "2-4 months",
            state: "UnComplete"
        },
        {
            id: 3,
            title: "Babbles like imitating conversation.",
            subtitle: "Usually achieved by:",
            agaRange: "2-4 months",
            state: "Not answered"
        }
    ];
    return (
        <div className="container-milestone">
            {
                datas.map((x, i) =>  <Milestone key={i} {...x }  /> )
            }
        </div>
    );
}