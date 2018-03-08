const filterReducer = (state = '', action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'SET_FILTER':
    return action.filter
  default:
    return state
  }
}

export default filterReducer
