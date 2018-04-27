import React from 'react'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'

import Styles from './CardInfo.css'

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.teamId === team
    })
    if (data) {
      return data.name
    } else {
      return 'Team Name Not Found'
    }
  }

  const formatDate = date => moment(date).format(' MM-DD-YYYY')

  const { teams, team, date } = props
  return (
    <div className={Styles.cardInfo}>
      <span className={Styles.teamName}>{teamName(teams, team)}</span>
      <span className={Styles.date}>
        <FontAwesome name="clock-o" />
        {formatDate(date)}
      </span>
    </div>
  )
}

export default CardInfo
