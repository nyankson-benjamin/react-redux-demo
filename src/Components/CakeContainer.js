import React from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  const numOfCakes = props.numOfCakes;
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
