import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log('USERDATA', userData);
  return (
    <div>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          {userData.data.map(user => {
            return <p> {user.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
