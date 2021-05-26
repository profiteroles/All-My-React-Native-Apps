import createDataContext from './createDataContext';
import jsonServer from '../API/jsonServer';

const blogReducer = (state, action) => {

};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
 
    }
  };
};
const deleteBlogPost = dispatch => {
  return async id => {

  };
};
const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {

    await jsonServer.put(`/blogposts/${id}`, {title, content});

    dispatch({
 
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
