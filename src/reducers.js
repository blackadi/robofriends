import { CHANGE_SEARCH_FIELD } from "./types";

const intialState = {
  searchField: "",
};

export const searchRobots = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};
