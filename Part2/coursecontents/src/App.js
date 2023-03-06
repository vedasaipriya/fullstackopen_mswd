import React from 'react'
import Course from './components/Course'

const App = ({coursesInfo}) =>
  <div>
    <Course courses={coursesInfo} />
  </div>

export default App