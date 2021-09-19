import axios from "axios";

const baseUrl = "https://6146c98b8f2f4e00173040d8.mockapi.io/api/users";
export const getUsers = async () => {
  const users = await axios.get(baseUrl);
  return users.data;
};

export const getUserById = async (id) => {
  const users = await axios.get(`${baseUrl}/${id}`);
  return users.data;
};

export const saveUser = async (data) => {
  const users = await axios.post(baseUrl, data);
  return users.data;
};

export const updateUser = async (data) => {
  const users = await axios.put(`${baseUrl}/${data.id}`, data);
  return users.data;
};

export const deleteUserById = async (id) => {
  const users = await axios.delete(`${baseUrl}/${id}`);
  return users.data;
};
