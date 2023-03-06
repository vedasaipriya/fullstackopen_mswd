import React from 'react'
import { useSelector } from 'react-redux'

const ONotification = () => {
  const Onotification = useSelector(state => state.notification)

  const Ostyle = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (Onotification === null) {
    return null
  }

  return (
    <div style={Ostyle}>
      {Onotification}
    </div>
  )
}

export default ONotification