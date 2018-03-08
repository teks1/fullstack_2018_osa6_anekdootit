import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
  handleChange = (event) => {
    const filter = event.target.value
    this.props.store.dispatch({ type: 'SET_FILTER', filter: filter })
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
          filter: <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter
