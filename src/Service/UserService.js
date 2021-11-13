import axios from "axios";

const baseUrl = "https://6146c98b8f2f4e00173040d8.mockapi.io/api/users";

//get all the users
export const getUsers = async () => {
  const users = await axios.get(baseUrl);
  return users.data;
};

//get the single user by Id
export const getUserById = async (id) => {
  const users = await axios.get(`${baseUrl}/${id}`);
  return users.data;
};

//Save user
export const saveUser = async (data) => {
  const users = await axios.post(baseUrl, data);
  return users.data;
};

//Update user
export const updateUser = async (data) => {
  const users = await axios.put(`${baseUrl}/${data.id}`, data);
  return users.data;
};

//Delete user by Id
export const deleteUserById = async (id) => {
  const users = await axios.delete(`${baseUrl}/${id}`);
  return users.data;
};
