import React from 'react'
import Styles from '../articles.css'

const TeamInfo = props => {
  return (
    <div className={Styles.articleTeamHeader}>
      <div
        className={Styles.left}
        style={{
          background: `url('/images/teams/${props.team.logo}')`,
        }}
      />
      <div className={Styles.right}>
        <div>
          <span>
            {props.team.city} - {props.team.name}
          </span>
        </div>
        <div>
          <strong>
            W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo
