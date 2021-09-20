import { MILESTONES } from "../data/milestones";
import { typeIndicator } from "../types/typeIndicator";
import { AREAS } from './../data/areas';

const initialState = {
  milestones:  JSON.parse(localStorage.getItem("milestones")) ||  MILESTONES,
  areas: JSON.parse(localStorage.getItem("areas")) ||  AREAS,
  areaActive: JSON.parse(localStorage.getItem("areaActive")) || { ...AREAS.filter(x => x.active)[0], position: 0 }
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
      return {
        ...state,
        areaActive: {
          ...state.areas[action.payload], 
          position: action.payload
        }
      }

    case typeIndicator.uiChangeAreaById:
      const indexArea = state.areas.findIndex(x => x.id === action.payload);
      return {
        ...state,
        areaActive: {
          ...state.areas[indexArea],  
          position: indexArea
        }
      }

    default:
      return state;
  }

}