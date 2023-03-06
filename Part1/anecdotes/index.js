import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Top = ({name}) => <h2>{name}</h2>

const Anecdote = ({text, votesCount}) =>
  <div>
    <p>{text}</p>
    <p>has got {votesCount} Votes</p>
  </div>

const Winner = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes till now</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has got {highestVoteCount} Votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>
    {text}
  </button>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  return (
    <div>
      <Top name="Anecdote of Today" />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button onClick={handleVoteClick} text="Vote"/>
      <Button onClick={handleAnecdoteClick} text="Next Anecdote"/>

      <Top name="Anecdote with most Number of Votes" />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)