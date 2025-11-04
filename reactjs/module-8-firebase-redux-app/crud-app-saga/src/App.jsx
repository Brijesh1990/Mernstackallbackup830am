import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Toolkit + Saga CRUD</h1>
      <UserForm />
      <UserList />
    </div>
  );
}
export default App;