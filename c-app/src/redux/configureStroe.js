import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promitions } from "./promotions";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promitions,
      leaders: Leaders,
    })
  );
  return store;
};
