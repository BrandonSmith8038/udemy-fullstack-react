import React, { Component } from 'react'
import Styles from './videosList.css'
import axios from 'axios'

import {JSON_SERVER} from '../../../config'
import Button from '../Buttons/Buttons'
import VideosTemplate from './VideosListTemplate'

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
  
  componentWillMount(){
    this.request(this.state.start, this.state.end)
  }
  
  request = (start, end) => {
    if(this.state.teams.length < 1){
      axios.get(`${JSON_SERVER}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`${JSON_SERVER}/videos?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          videos: [...this.state.videos,...response.data]
      })
    })
  }
  
  renderVideos = () => {
    let template = null
    
    switch(this.props.type){
      case('card'):
        template = <VideosTemplate data={this.state.videos} team={this.state.teams}/>
        break;
      default:
        template=null
    }
    return template
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
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    )
  }
  
}

export default VideosList