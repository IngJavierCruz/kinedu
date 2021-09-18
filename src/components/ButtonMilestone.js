import { React } from 'react';
import { MilestoneStatus } from '../dictionary/milestone-status';

export const ButtonMilestone = ({state}) => {
    return (
        <button className={ `btn-milestone ${ MilestoneStatus[state] }`}>
            <i className="fas fa-check"></i>
            <span>{ state }</span>
        </button>
    )
}
