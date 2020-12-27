import robots from '../apis/robots';
import { CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_FAILED } 
from "./types";

export const setSearchField = (text) => ({

  type: CHANGE_SEARCH_FIELD,
  payload: text,

});

//function return a function
export const requestRobots = () => async (dispatch) => {

  dispatch({type: REQUEST_ROBOTS_PENDING});

  const response = await robots.get("/users").
  then(response => {dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: response.data})}).
  catch(error => {dispatch({type: REQUEST_ROBOTS_FAILED, payload: error})});

  
  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
  //     .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
};