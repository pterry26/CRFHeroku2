import React from 'react'
import RaceTableRow from './RaceTableRow'

const RaceTable = ({ list }) => {
  return (
    <table id="race-table">
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Distance</th>
        <th>Past Date</th>
        <th>Score</th>
      </tr>
          {list.map((race, idx) => {
            return <RaceTableRow key={`${idx}-race-${race.name}`} race={race}/>
          })}
    </table>
  )
}

export default RaceTable