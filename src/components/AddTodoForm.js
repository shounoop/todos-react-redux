import PropTypes from 'prop-types'
import { addTodo } from "../store/actions";
import { connect } from 'react-redux'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState('')

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()

    if (title !== '') {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false
      }

      addTodo(newTodo)
      setTitle('')
    }

  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='title' onChange={onChangeTitle} value={title} />
        <input type='submit' value='ADD' />
      </form>
    </div>
  );
}

AddTodoForm.prototype = {
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = store => ({})

export default connect(mapStateToProps, { addTodo })(AddTodoForm);