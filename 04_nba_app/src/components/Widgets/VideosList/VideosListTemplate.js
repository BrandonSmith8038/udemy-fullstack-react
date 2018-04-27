import React from 'react'
import Styles from './videosList.css'
import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo/CardInfo'
import { CSSTransition } from 'react-transition-group'

const videosListTemplate = props => {
  return props.data.map((item, i) => {
    return (
      <CSSTransition
        classNames={{
          enter: Styles.newsList_wrapper,
          enterActive: Styles.newsList_wrapper_enter,
        }}
        timeout={500}
        key={i}
      >
        <Link to={`/videos/${item.id}`} key={i}>
          <div className={Styles.videoListItem_wrapper}>
            <div
              className={Styles.left}
              style={{
                background: `url(/images/videos/${item.image})`,
              }}
            >
              <div />
            </div>
            <div className={Styles.right}>
              <CardInfo teams={props.teams} team={item.team} date={item.date} />
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      </CSSTransition>
    )
  })
}

export default videosListTemplate
