import { typeIndicator } from './../types/typeIndicator';

export const updateIndicator = (milestone) => ({
    type: typeIndicator.uiUpdate,
    payload: { ...milestone }
})
