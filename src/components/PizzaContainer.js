import React, { Component } from "react";
import { connect } from "react-redux";
import { buyPizza } from "../redux/pizza";

const mapStateToProps = state => {
  return {
    numOfPizza: state.pizza.numOfPizza
  };
};

const matchDispatchToProps = dispatch => {
  return {
    buyPizza: () => dispatch(buyPizza())
  };
};
class PizzaContainer extends Component {
  render() {
    console.log("PROPS --->", this.props);
    return (
      <>
        <h1> connect HOC container </h1>
        <h2> Number of Pizza:- {this.props.numOfPizza} </h2>
        <button onClick={this.props.buyPizza}> Buy Pizza </button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PizzaContainer);
