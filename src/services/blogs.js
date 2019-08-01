import axios from "axios";

const baseUrl = "/api/blogs";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
  console.log(token);
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const deleteBlog = async id => {
  await axios.delete(`${baseUrl}/${id}`);
};

const updateLike = async blogToUpdate => {
  console.log("blogsrvice:", blogToUpdate.id);
  const newBlogObject = {
    ...blogToUpdate,
    likes: blogToUpdate.likes + 1
  };
  const response = await axios.put(
    `${baseUrl}/${blogToUpdate.id}`,
    newBlogObject
  );
  console.log("response.data", response.data);
  return response.data;
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };
  console.log(config);
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};
export default { getAll, create, setToken, deleteBlog, updateLike };
