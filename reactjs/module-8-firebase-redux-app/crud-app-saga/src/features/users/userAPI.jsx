import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/users'; // Demo API from placeholder

const api = {
  fetchUsers: async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  },
  createUser: async (user) => {
    const { data } = await axios.post(BASE_URL, user);
    return data;
  },
  updateUser: async (user) => {
    const { data } = await axios.put(`${BASE_URL}/${user.id}`, user);
    return data;
  },
  deleteUser: async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
};
export default api;