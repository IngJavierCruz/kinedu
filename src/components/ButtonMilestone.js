import { React } from 'react';

export const ButtonMilestone = ({state}) => {
    return (
        <button className={
            `btn-milestone 
            ${state === "Complete" ? " btn-milestone--completed" : ""}
            ${state === "UnComplete" ? " btn-milestone--uncompleted" : "" }
            ${state === "Not answered" ? " btn-milestone--default" : "" }
        `}>
            <i className="fas fa-check"></i>
            <span>{ state }</span>
        </button>
    )
}
