import React from 'react'
import NewsListItem from './news_list_item'

const NewsList = (props) => {
  const items = props.news.map((item) => (
    <NewsListItem item={item}  key={item.id}/>
  ))
  return (
    <div>
      {items}
    </div>  
  )
}

export default NewsList