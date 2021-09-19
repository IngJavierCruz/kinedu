import { typeIndicator } from '../types/typeIndicator';

export const updateIndicator = (id, state) => ({
    type: typeIndicator.uiUpdate,
    payload: { id, state }
});


export const changeAreaSkill = (nextPosition) => ({
    type: typeIndicator.uiChangeArea,
    payload: nextPosition
});

export const changeAreaSkillById = (areaId) => ({
    type: typeIndicator.uiChangeAreaById,
    payload: areaId
});
