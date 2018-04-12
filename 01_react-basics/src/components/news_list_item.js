import React from 'react'
import classes from '../css/styles.css'

const NewsListItem = ({item}) => {
  
  
  const {title, feed} = item
  return (
    <div className={classes.news_items}>
       <div>
        <h3>{title}</h3>
        <div>
          {feed}
        </div>
    </div>
    </div>
  )
}
  
  export default NewsListItem