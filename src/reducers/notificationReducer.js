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

export const showNotification = (notification) => {
  return {
    type: 'SHOW',
    notification
  }
}

export default notificationReducer
