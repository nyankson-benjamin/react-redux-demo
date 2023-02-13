import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { connect } from "react-redux";
import { addCake, sellCake, addIceCream, sellIceCream } from "./storeAction";
function ShopContainer(props) {
  const numOfCakes = props.numOfCakes;
  const numOfIceCreams = props.numOfIceCreams;

  return (
    <div>
      <h3>Total Number of Items: {numOfCakes + numOfIceCreams}</h3>
      <h2>Number of cakes - {numOfCakes} </h2>
      <div>
        <ButtonGroup>
          <Button variant="contained" disableElevation onClick={props.addCake}>
            ADD CAKE
          </Button>
          <Button variant="contained" disableElevation onClick={props.sellCake}>
            SELL CAKE
          </Button>
        </ButtonGroup>
      </div>

      <br />

      <h2>Number of IceCreams - {numOfIceCreams} </h2>
      <div>
        <ButtonGroup>
          <Button
            variant="contained"
            disableElevation
            onClick={props.addIceCream}
          >
            ADD ICECREAM
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={props.sellIceCream}
          >
            SELL ICECREAM
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCake: () => dispatch(addCake()),
    sellCake: () => dispatch(sellCake()),
    addIceCream: () => dispatch(addIceCream()),
    sellIceCream: () => dispatch(sellIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
