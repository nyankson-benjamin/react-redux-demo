import { SELL_CAKE, ADD_CAKE, ADD_ICECREAM, SELL_ICECREAM } from "./storeTypes";

const initialState = {
  numOfCakes: 20,
  numOfIceCreams: 20,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case SELL_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    case ADD_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };

    default:
      return state;
  }
};

export default Reducer;
