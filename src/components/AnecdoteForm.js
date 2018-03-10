import React from 'react'
import anecdoteService from './../services/anecdotes'
import { handleSubmit } from './../reducers/anecdoteReducer'
import { showNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

  addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    this.props.handleSubmit(content)
    const notification = 'you added new anecdote'
    this.props.showNotification(notification)
    setTimeout(() => {this.props.showNotification(null)}, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { handleSubmit, showNotification }
)(AnecdoteForm)
