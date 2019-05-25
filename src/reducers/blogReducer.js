import blogService from '../services/blogService'

const reducer = (state = [], action) => {
  switch(action.type) {
  case 'INITIALIZE':
    return action.data
  case 'REMOVE_SINGLE':
    return state.filter(blog => blog.id !== action.id)
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INITIALIZE',
      data: blogs
    })
  }
} 

export const removeBlog = id => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_SINGLE',
      id
    })
  }
}

export default reducer