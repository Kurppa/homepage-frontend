import blogService from '../services/blogService'

const reducer = (state = [], action) => {
  switch(action.type) {
  case 'INITIALIZE':
    return action.data
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

export default reducer