import blogService from "../services/blogs";

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_BLOGS": {
      return action.data;
    }
    case "NEW_BLOG": {
      console.log("create blog");
      return state.concat(action.data);
    }
    case "DELETE_BLOG": {
      const deleteBlogId = action.data;
      return state.filter(blog => blog.id !== deleteBlogId);
    }
    case "UPVOTE_BLOG": {
      const updatedBlog = action.data;
      return state.map(blog =>
        blog.id !== updatedBlog.id ? blog : updatedBlog
      );
    }
    case "ADD_COMMENT": {
      console.log("add comment", action.data);
      const updatedBlogComment = action.data;
      return state.map(blog =>
        blog.id !== updatedBlogComment.id ? blog : updatedBlogComment
      );
    }
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

export const addComment = (comment, blog) => {
  console.log("action creator", comment, "blog to add comment to: ", blog);
  return async dispatch => {
    const blogToComment = await blogService.updateComment(comment, blog);
    console.log("updating comments...new blog:", blogToComment);
    dispatch({
      type: "ADD_COMMENT",
      data: blogToComment
    });
  };
};

export default blogsReducer;
