import { combineReducers } from 'redux';

import * as ActionType from './constants';

const categoriesReducer = (state = [], action) => {
  if (action.type === ActionType.GET_CATEGORIES) {
    return [...action.payload]
  }

  return state;
};

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return [...action.payload];

    case ActionType.CREATE_POST:
      return [...state, action.payload];

    // case ActionType.DELETE_POST:
    // logic for producing a new state after deleting the post

    // case ActionType.UPDATE_POST:
    // logic for producing a new state with updated post

    default:
      return state;
  }
};

const appReducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer
});

export default appReducers;
