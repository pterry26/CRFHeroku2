import React from 'react'

const RaceTableRow = ({ race }) => {
    let level = getLevel(race.score);
  return (
    <tr class="race-table-row">
      <td>{race.name}</td>
      <td>{race.city}</td>
      <td>{race.distance}</td>
      <td>{race.pastDate}</td>
      <td class={`${level}`}>{race.score}</td>
    </tr>
  )
}

const getLevel = (score) => {
    if (score < 60) {
        return 'bronze-level';
    } else if (score < 100) {
        return 'silver-level';
    } else {
        return 'gold-level';
    }
}

export default RaceTableRow