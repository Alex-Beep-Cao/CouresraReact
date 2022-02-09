import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// thunk return funcion
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};

// returning a action object so in dishes.js call action.payload
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmes) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmes,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const CommentsFailed = (errmes) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmes,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmes) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmes,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
