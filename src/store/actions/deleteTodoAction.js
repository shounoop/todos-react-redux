import axios from "axios"

const deleteTodoAction = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}

export default deleteTodoAction