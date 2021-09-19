import { MILESTONES } from "../data/milestones";
import { typeIndicator } from "../types/typeIndicator";
import { AREAS } from './../data/areas';

const initialState = {
  milestones: MILESTONES,
  areas: AREAS,
  areaActive: AREAS.filter(x => x.active)[0]
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

    case typeIndicator.uiChangeArea:
      console.log(action.payload);
      console.log({ ...state.areas[action.payload]});
      return {
        ...state,
        areaActive: {...state.areas[action.payload]}
      }

    default:
      return state;
  }

}