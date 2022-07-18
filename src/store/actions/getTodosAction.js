import axios from 'axios'

const getTodosAction = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')

    dispatch({
      type: 'GET_TODOS',
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

export default getTodosAction