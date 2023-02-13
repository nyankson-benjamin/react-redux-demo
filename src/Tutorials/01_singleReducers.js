const redux = require("redux");
const createStore = redux.createStore;

//action definitions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICRECREAM";

//action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
 
function buyIcream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

//using single reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy of the state
        numOfCakes: state.numOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());
unsubscribe();
