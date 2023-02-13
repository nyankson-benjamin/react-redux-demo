import React from "react";
import { buyIceCream } from "../Redux/TRIAL";
import { addIceCream } from "../Redux/TRIAL";
import { connect } from "react-redux";
function IceCreameContainer(props) {
  const numOfIceCreams = props.numOfIceCreams;
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
      <button onClick={props.addIceCream}>Add IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    addIceCream: () => dispatch(addIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreameContainer);
