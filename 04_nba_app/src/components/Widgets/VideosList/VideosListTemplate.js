import React from 'react'
import Styles from './videosList.css'
import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo/CardInfo'

const videosListTemplate = (props) => {
  return props.data.map((item, i) => {
     return ( 
       <Link to={`/videos/${item.id}`} key={i}>
        <div className={Styles.videoListItem_wrapper}>
          <div className={Styles.left} style={{
            background: `url(/images/videos/${item.image})`
          }}>
            <div></div>
          </div>
          <div className={Styles.right}>
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link> 
    )
  })
}

export default videosListTemplate