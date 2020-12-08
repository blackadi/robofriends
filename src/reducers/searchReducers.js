import { CHANGE_SEARCH_FIELD } from "../actions/types";


const INTIAL_STATE = {
  searchField: "",
};

export default (state = INTIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};


