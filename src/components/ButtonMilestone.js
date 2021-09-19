import { React } from 'react';
import { useDispatch } from 'react-redux';
import { MilestoneStatus } from '../dictionary/milestone-status';
import { updateIndicator } from './../actions/indicator';
import { INDICATOR_ESTATUS } from './../dictionary/milestone-status';

export const ButtonMilestone = ({ id, state }) => {

    const dispatch = useDispatch();

    const handleUpdate = () => {
        const newState = state === INDICATOR_ESTATUS.Complete 
        ? INDICATOR_ESTATUS.UnComplete 
        : INDICATOR_ESTATUS.Complete 

        dispatch( updateIndicator( id, newState ));
    }
    console.log(id);
    return (
        <button 
            className={ `btn-milestone ${ MilestoneStatus[state] }`} 
            onClick={ handleUpdate }
        >
            <i className="fas fa-check"></i>
            <span>{ state }</span>
        </button>
    )
}
