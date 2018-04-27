import React from 'react'

import VideosList from '../Widgets/VideosList/VideosList'

const VideosHome = () => {
  return (
    <div>
      <VideosList
        type="card"
        title={true}
        loadMore={true}
        start={0}
        amount={8}
      />
    </div>
  )
}

export default VideosHome
