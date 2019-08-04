import axios from "axios";

const baseUrl = "/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log("userservice", response.data);
  return response.data;
};

const deleteUser = async id => {
  await axios.delete(`${baseUrl}/${id}`);
};

const updateUser = async userToUpdate => {
  console.log("updated this user::", userToUpdate.name);
  const response = await axios.put(
    `${baseUrl}/${userToUpdate.id}`,
    userToUpdate
  );
  console.log("response.data", response.data);
  return response.data;
};
//input -> name, username, password
const createUser = async newUser => {
  const response = await axios.post(baseUrl, newUser);
  return response.data;
};
export default { getAll, createUser, deleteUser, updateUser };
