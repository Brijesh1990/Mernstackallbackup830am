import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';import { fetchUsersRequest, deleteUserRequest } from '../features/users/userSlice';
const UserList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email} - {user.age} - {user.phone}
            <button onClick={() => dispatch(deleteUserRequest(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;