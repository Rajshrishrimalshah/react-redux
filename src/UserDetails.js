import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUser, removeUser } from './actions';

const UserDetails = () => {
  const user = useSelector(state => state.userReducer);
  const [name, setName] = useState('');
  console.log('USER', user);

  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Username:
        <input type='text' onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <br />
      <button
        style={{ marginLeft: '110px' }}
        onClick={() => dispatch(addUser(name))}
      >
        Add User
      </button>

      <ul>
        {user &&
          user.map((user, index) => (
            <>
              <li key={index}>
                {user.name}{' '}
                <button
                  onClick={() => dispatch(removeUser(index))}
                  style={{ marginLeft: '30px' }}
                >
                  &times;
                </button>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default UserDetails;
