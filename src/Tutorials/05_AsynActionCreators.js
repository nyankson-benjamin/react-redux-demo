//Async API calls to fecth data from an end point
//Fetches an a list of users from an API end point and stores it in the redux store

// ====State object ====
//state={
//loading:true, <=> display a loading spinner in your component
// data: [], <=> list of users
// error:"" <=> Display errors to the user
//}

//  ====Actions====
// 1. FETCH_USERS_REQUEST <=> Fetch list of users
// 2. FETCH_USER_SUCCESS <=> Fetched successfully
// 2. FETCH_USER_FAILURE <=> error in fetching the data

// ====REducers====

// Case: FETCH_USERS_REQUEST
//       loading: true

// Case: FETCH_USERS_SUCCESS
//       loading: false
//       users: data(from API)

// Case: FETCH_USERS_FAILURE
//       loading: false
//       users: error (from API)

const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
// State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// REDUCER FNC

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

// Action creator

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
