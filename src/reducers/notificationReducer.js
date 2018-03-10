const notificationReducer = (state = 'hello', action) => {
  console.log('ACTION', action)
  switch (action.type) {
  case 'SHOW':
    let copy = action.notification
    return copy
  default:
    return state
  }
}

export const showNotification = (notification, time) => {
  const t =  time === undefined ? 5000 : time * 1000
  return async (dispatch) => {
    setTimeout(() => dispatch({ type: 'SHOW', notification: null }), t)
    dispatch({
      type: 'SHOW',
      notification
    })
  }
}

export default notificationReducer
