import blogService from "../services/blogs";

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_BLOGS":
      return action.data;
    case "NEW_BLOG":
      console.log("create blog");
      return state.concat(action.data);
    case "DELETE_BLOG":
      console.log("delete blog from reducer");
      const deleteBlogId = action.data;
      return state.filter(blog => blog.id !== deleteBlogId);
    case "UPVOTE_BLOG":
      console.log("take my upvote", action.data);
      const updatedBlog = action.data;
      return state.map(blog =>
        blog.id !== updatedBlog.id ? blog : updatedBlog
      );
    default:
      return state;
  }
};

//action creators
export const initializeBlogs = () => {
  console.log("initialize blogs");
  return async dispatch => {
    const blogs = await blogService.getAll();
    console.log("dispatching", blogs);
    dispatch({
      type: "INIT_BLOGS",
      data: blogs
    });
  };
};

export const createBlog = blogObject => {
  console.log("creating blog..");
  return async dispatch => {
    const newBlog = await blogService.create(blogObject);
    dispatch({
      type: "NEW_BLOG",
      data: newBlog
    });
  };
};

export const deleteBlog = id => {
  console.log("delete blog");
  const result = window.confirm("Are you sure???");
  if (result) {
    return async dispatch => {
      await blogService.deleteBlog(id);
      dispatch({
        type: "DELETE_BLOG",
        data: id
      });
    };
  }
};

export const updateLike = blog => {
  console.log("like", blog);
  return async dispatch => {
    const updatedBlog = await blogService.updateLike(blog);
    console.log("updating likes...", updatedBlog);
    dispatch({
      type: "UPVOTE_BLOG",
      data: updatedBlog
    });
  };
};

export default blogsReducer;
