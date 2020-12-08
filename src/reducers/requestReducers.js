import { 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_FAILED } 
  from "../actions/types";

const INTIAL_STATE = {
    isPending: false,
    robots: [],
    error: ''
  };
  
  export default (state = INTIAL_STATE, action = {}) => {
    switch(action.type){
      case REQUEST_ROBOTS_PENDING:
        return { ...state, isPending: true};
  
      case REQUEST_ROBOTS_SUCCESS:
        return { ...state, robots: action.payload, isPending: false};
  
      case REQUEST_ROBOTS_FAILED:
        return { ...state, error: action.payload, isPending: false};
  
      default:
        return state;
    }
  }