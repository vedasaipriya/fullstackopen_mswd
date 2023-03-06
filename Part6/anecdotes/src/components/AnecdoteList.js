import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/OanecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const OAnecdote = ({ Oanecdote }) => {
    const dispatch = useDispatch()

    const voteOHandler = () => {
      dispatch(vote(Oanecdote))
      dispatch(setNotification(`You voted for '${Oanecdote.content}'`, 5))
    }

    return (
    <div>
        <div>
            {Oanecdote.content}
        </div>
        <div>
            has {Oanecdote.votes}
            <button onClick={voteOHandler}>vote</button>
        </div>
    </div>
    )
}

const OAnecdoteList = () => {
  const Oanecdotes = useSelector(({filter, Oanecdotes}) => {
    if ( filter === null ) {
      return Oanecdotes
    }
    const regex = new RegExp( filter, 'i' )
    return Oanecdotes.filter(Oanecdote => Oanecdote.content.match(regex))
  })

  const byOVotes = (b1, b2) => b2.votes - b1.votes

  return(
    Oanecdotes.sort(byOVotes).map(Oanecdote => <OAnecdote key={Oanecdote.id} Oanecdote={Oanecdote} />)
  )
}

export default OAnecdoteList