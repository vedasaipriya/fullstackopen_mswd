import anecdoteService from '../services/anecdotes'

const anecdoteOReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'OVOTE': {
      const id = action.data.id
      const updatedAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...updatedAnecdote,
        Ovotes: updatedAnecdote.Ovotes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    }
    default:
      return state
  }
}

export const initializeOAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createOAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const Ovote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update({ ...anecdote, Ovotes: anecdote.Ovotes + 1 })
    dispatch({
      type: 'OVOTE',
      data: updatedAnecdote,
    })
  }
}

export default anecdoteOReducer