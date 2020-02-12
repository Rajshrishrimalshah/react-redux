import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake';
import { buyIceCream } from '../redux/icecream';

function ItemContainer(props) {
  console.log('PROPS', props)
  return (
    <div>
      <h2>
        {props.checkItem} Item - {props.item}
      </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {;

  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
    checkItem: ownProps.cake ? 'Cake' : 'Ice Cream'
  };
};

const mapDispatchToProp = (dispatch, ownProps) => {


  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ItemContainer);
