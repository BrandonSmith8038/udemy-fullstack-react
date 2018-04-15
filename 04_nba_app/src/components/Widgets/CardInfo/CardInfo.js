import React from 'react'
import FontAwesome from 'react-fontawesome'

import Styles from './CardInfo.css'

const CardInfo = (props) => {
  
  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team
    })
    if(data){
      return data.name
    } else {
      return "Team Name Not Found"
    }
  }
  
  const { teams, team, date } = props
  return (
    <div className={Styles.cardInfo}>
      <span className={Styles.teamName}>
        {teamName(teams, team)}
      </span>
      <span className={Styles.date}>
        <FontAwesome name="clock-o"/>
        {date}
      </span>
    </div>
  )
}

export default CardInfo