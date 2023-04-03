import { ADD_CAKE, ADD_ICECREAM, SELL_CAKE, SELL_ICECREAM } from "./storeTypes";

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};

export const sellCake = () => {
  return {
    type: SELL_CAKE,
  };
};

export const addIceCream = () => {
  return {
    type: ADD_ICECREAM,
  };
};

export const sellIceCream = () => {
  return {
    type: SELL_ICECREAM,
  };
};
