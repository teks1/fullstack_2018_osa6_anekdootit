import anecdotesService from './../services/anecdotes'
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (store = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'VOTE':
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes + 1 } ]
  case 'CREATE':
    return [...store, action.content ]
  case 'INIT_ANECDOTES':
    return action.data
  case 'UPDATE':
    return store
  default:
    return store
  }
}

export const handleSubmit = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'CREATE',
      content: newAnecdote
    })
  }
}

export const handleVote = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export const update = () => {
  return async (dispatch) => {
    dispatch({
      type: 'UPDATE'
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
