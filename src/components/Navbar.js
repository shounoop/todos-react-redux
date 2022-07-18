import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Navbar({ todos }) {
  return (
    <div className='navbar'>
      <h1>My Redux Todo(s) App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todo(s): {todos.length}</li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = store => ({
  todos: store.todoReducer.todos
})

export default connect(mapStateToProps, {})(Navbar);