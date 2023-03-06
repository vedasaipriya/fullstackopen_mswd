import React from 'react'
import Header from './Top'
import Content from './Description'
import Total from './Total'

const Course = ({courses}) =>
  <div>
    {courses.map(course =>
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )}
  </div>

export default Course