import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './services/anecdotes'
import { connect } from 'react-redux'
import { anecdoteInitialization } from './reducers/anecdoteReducer'

class App extends React.Component {
  componentDidMount () {
    //const anecdotes = await anecdoteService.getAll()
    this.props.anecdoteInitialization()
  }
  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(null, { anecdoteInitialization })(App)
