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
    buyCake: (number) => dispatch(buyCake(number))
  };
};
class NewCakeContainer extends Component {
  state = {
    number: ''
  };

  handleChange = e => {
    this.setState({
      number: e.target.value
    });
  };
  render() {
    console.log("PROPS --->", this.props);
    const { number } = this.state
    return (
      <>
        <h1> connect HOC container </h1>
        <h2> Number of Cake:- {this.props.numOfCakes} </h2>
        <br />
        Enter Number oF CAKE
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.number}
        />
        <br />
        <br />
        <button onClick={() => this.props.buyCake(number)}>
          {" "}
          Buy {this.state.number} Cake{" "}
        </button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(NewCakeContainer);
