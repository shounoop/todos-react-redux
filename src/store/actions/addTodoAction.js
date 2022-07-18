import axios from "axios"

const addTodoAction = newTodo => async dispatch => {
  try {
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    })
  } catch (error) {
    console.log(error)
  }
}

export default addTodoAction