import React, { Component } from 'react'
import Styles from './videosList.css'
import axios from 'axios'

import {JSON_SERVER} from '../../../config'
import Button from '../Buttons/Buttons'

class VideosList extends Component {
  
  state ={
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  renderTitle = () => {
    return this.props.title ? <h3><strong>NBA</strong> Videos</h3> : null
  }
  
  loadMore = () => {
    
  }
  
  renderButton = () => {
    return this.props.loadMore 
    ? <Button
        type="loadMore"
        loadMore={() => this.loadMore()}
        cta={"Load More Videos"}
      />
    : <Button
        type="linkTo"
        cta="More Videos"
        linkTo="/videos"
      /> 
  }
  
  render(){
    return (
      <div className={Styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    )
  }
  
}

export default VideosList