const markComplete = (id) => dispatch => {
  dispatch({
    type: 'MARK_COMPLETE',
    payload: id
  })
}

export default markComplete