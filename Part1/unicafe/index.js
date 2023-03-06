import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Top = props => <h1>{props.name}</h1>

const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)

    if (total === 0) {
      return (
        <div>
          No feedback yet
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <Statistic text="GOOD" value={clicks.good} />
            <Statistic text="Neutral" value={clicks.neutral} />
            <Statistic text="BAD" value={clicks.bad} />
            <Statistic text="ALL" value={total} />
            <Statistic text="AVERAGE" value={average} />
            <Statistic text="POSITIVE" value={positive} />
          </tbody>
        </table>
      </div>
    )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})


  return (
    <div>
      <Top name="Customer Feedback Dashboard" />
      <Button onClick={handleGoodClick} text='GOOD' />
      <Button onClick={handleNeutralClick} text='NEUTRAL' />
      <Button onClick={handleBadClick} text='BAD' />
      <Top name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)