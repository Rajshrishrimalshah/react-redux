import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from './actions';
import UserDetails from './UserDetails';

function App() {
  const count = useSelector(state => state.counterReducer);
 
  const dispatch = useDispatch();

  return (
    <div>
      <p>COUNTER:- {count}</p>
      <button
        style={{ marginRight: '20px' }}
        onClick={() => dispatch(increment())}
      >
        + Increment Counter
      </button>

      <button 
        onClick={() => dispatch(decrement())}
      >
        - Decrement Counter 
      </button>

      <br />
      <br />

      <button
        style={{ marginLeft: '120px', marginBottom: '50px' }}
        onClick={() => dispatch(reset())}
      >
        Reset 
      </button>

      <p>USER DETAILS</p>
      <UserDetails />
    </div>
  );
}

export default App;
