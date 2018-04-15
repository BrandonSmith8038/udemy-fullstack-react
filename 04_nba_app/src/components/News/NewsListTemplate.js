import React from 'react'
import Styles from './NewsHome.css'
import { Link } from 'react-router-dom'
import CardInfo from '../Widgets/CardInfo/CardInfo'

const NewsListTemplate = (props) => {
  //console.log(props)
  return props.data.map((item, i) => {
     return ( 
       <Link to={`/articles/${item.id}`} key={i}>
        <div className={Styles.newsListItem_wrapper}>
          <div className={Styles.left} style={{
            background: `url(/images/articles/${item.image})`
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

export default NewsListTemplate