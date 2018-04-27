import React from 'react'
import Styles from '../articles.css'
import moment from 'moment'

const PostData = props => {
  console.log('PostData')
  return (
    <div className={Styles.articlePostData}>
      <div>
        Date:
        <span>{moment(props.data.date).format(' MM-DD-YYYY')}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  )
}

export default PostData
