import React from 'react'
import Filter from '../components/Filter'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter
    const searchTerm = (anecdote) => {
      if (filter === 0) {
        return true
      }
      return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    }
    const anecdotesToShow = anecdotes.filter(searchTerm)
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch({ type: 'VOTE', id: anecdote.id }),
                this.props.store.dispatch({ type: 'SHOW', notification: 'you voted' })}
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

export default AnecdoteList
