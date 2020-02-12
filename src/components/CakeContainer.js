import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake";

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const matchDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};
class CakeContainer extends Component {
  render() {
    console.log("PROPS --->", this.props);
    return (
      <>
        <h1> connect HOC container </h1>
        <h2> Number of Cake:- {this.props.numOfCakes} </h2>
        <button onClick={this.props.buyCake}> Buy Cake </button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CakeContainer);
