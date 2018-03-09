import React from 'react'
import Filter from '../components/Filter'
import anecdoteService from './../services/anecdotes'
import { update } from './../reducers/anecdoteReducer'
import { showNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  voteAnecdote = async (anecdote) => {
    //this.props.handleVote(anecdote.id)
    await anecdoteService.updateVotes(anecdote.id, ++anecdote.votes)
    this.props.update()
    const notification = 'you voted ' + anecdote.content
    this.props.showNotification(notification)
    setTimeout(() => {this.props.showNotification(null)}, 5000)
  }
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
              <button onClick={() => this.voteAnecdote(anecdote)}>
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
  console.log(anecdotes)
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

const ConnectedAnecdoteList = connect(mapStateToProps, { update, showNotification })(AnecdoteList)
export default ConnectedAnecdoteList
