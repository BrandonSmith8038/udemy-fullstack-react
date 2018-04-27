import React, { Component } from 'react'
import Styles from './videosList.css'
import { firebaseVideos, firebaseTeams, firebaseLooper } from '../../../firebase'
import { TransitionGroup } from 'react-transition-group'
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
      firebaseTeams.once('value')
      .then(snapshot => {
        const teams = firebaseLooper(snapshot)
        this.setState({
          teams
        })
      })
    }
    firebaseVideos.orderByChild("id").startAt(start).endAt(end).once('value')
      .then(snapshot => {
        const videos = firebaseLooper(snapshot)
        this.setState({
          videos
        })
      })
      .catch(err => console.log(err))
  }
  
  renderVideos = () => {
    let template = null
    
    switch(this.props.type){
      case('card'):
        template = <VideosTemplate data={this.state.videos} teams={this.state.teams}/>
        break;
      default:
        template=null
    }
    return template
  }
  
  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end + 1, end)
    this.setState({
      end
    })
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
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderVideos()}
        </TransitionGroup>
        {this.renderButton()}
      </div>
    )
  }
  
}

export default VideosList