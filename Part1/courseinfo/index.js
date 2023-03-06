import React from 'react'
import ReactDOM from 'react-dom'

const Top = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Info = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Total Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals Of React',
        exercises: 10
      },
      {
        name: 'Using Props To Pass Data',
        exercises: 7
      },
      {
        name: 'State Of A Component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Top course={course.name} />
      <Info parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))