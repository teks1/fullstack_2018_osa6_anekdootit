import React from 'react'
import Filter from '../components/Filter'
import { handleVote } from './../reducers/anecdoteReducer'
import { showNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  render() {
    const anecdotesToShow = this.props.anecdotesToShow
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.handleVote(anecdote.id),
                this.props.showNotification('you voted')}
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const searchAnecdotes = (anecdotes, filter) => {
  if (filter === 0) {
    return true
  }
  return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: searchAnecdotes(state.anecdotes, state.filter).sort((a, b) => b.votes - a.votes)
  }
}

const ConnectedAnecdoteList = connect(mapStateToProps, { handleVote, showNotification })(AnecdoteList)
export default ConnectedAnecdoteList
