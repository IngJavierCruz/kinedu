import { MILESTONES } from "../data/milestones";
import { typeIndicator } from "../types/typeIndicator";

const initialState = {
  milestones: MILESTONES
};

export const indicatorReducer = (state = initialState, action) => {

  switch (action.type) {
    case typeIndicator.uiUpdate:
      return {
        ...state,
        milestones:
          state.milestones.map(x => ({ 
            ...x, 
            ...(x.id === action.payload.id && { 
              state: action.payload.state 
            })
          }))
      }

    default:
      return state;
  }

}