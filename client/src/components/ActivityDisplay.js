import React from 'react'

const ActivityDisplay = ({ name }) => {
  let color = '#e6194B';
  return (
    <h1 id="question">Do you want to <span id='suggestedActivity' style={{color: `${color}`}}>{ name }</span> today?</h1>
  )
}

export default ActivityDisplay