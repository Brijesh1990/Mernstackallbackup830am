import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserRequest } from '../features/users/userSlice';

const UserForm = () => {

  const [user, setUser] = useState({ name: '', email: '',age: '',phone:'' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.age || !user.phone) return;
    dispatch(createUserRequest(user));
    setUser({ name: '', email: '' ,age:'',phone:'' });
  };

  return (

    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      
      <input
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />

      
      <input
        placeholder="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
};
export default UserForm;