import React, { Component } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/icecream";

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  };
};

const matchDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};
class IceCreamContainer extends Component {
  render() {
    console.log("PROPS --->", this.props);
    return (
      <>
        <h1> connect HOC container </h1>
        <h2> Number of IceCream:- {this.props.numOfIceCream} </h2>
        <button onClick={this.props.buyIceCream}> Buy IceCream </button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(IceCreamContainer);
