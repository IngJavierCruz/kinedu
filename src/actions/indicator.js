import { typeIndicator } from '../types/typeIndicator';

export const updateIndicator = (id, state) => ({
    type: typeIndicator.uiUpdate,
    payload: { id, state }
});


export const changeAreaSkill = (indexCurrent) => ({
    type: typeIndicator.uiChangeArea,
    payload: indexCurrent + 1
});
