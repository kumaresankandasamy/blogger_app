import * as ActionType from './constants';
import * as CategoriesApi from '../api/categories';
import * as PostsApi from '../api';

export const getCategories = () => {
  // call to the server to get categories
  return (dispatch) => {
    return CategoriesApi.getCategories()
      .then(categories => {
        dispatch({
          type: ActionType.GET_CATEGORIES,
          payload: categories
        });
      })
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    return PostsApi.getPosts()
      .then(posts => {
        dispatch({
          type: ActionType.GET_POSTS,
          payload: posts
        });
      })
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
  };
};
