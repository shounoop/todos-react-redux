import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTodos, markComplete, deleteTodo } from '../store/actions/index';
import AddTodoForm from './AddTodoForm';

function Todos({ todos, getTodos, markComplete, deleteTodo }) {
  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className='todo-list'>
      <AddTodoForm />
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id} className={(todo.completed && 'completed') || ''}>
              {todo.title}
              <input
                type='checkbox'
                onChange={markComplete.bind(this, todo.id)}
              />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div >
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo })(Todos);