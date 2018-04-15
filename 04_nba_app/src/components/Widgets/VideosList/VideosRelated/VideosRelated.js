import React from 'react'

import Styles from '../videosList.css'
import VideoListTemplate from '../VideosListTemplate'

const videosReleated = props => {
  return (
    <div className={Styles.relatedWrapper}>
      <VideoListTemplate
        data={props.data}
        teams={props.teams}
      />
    </div>
  )
}

export default videosReleated