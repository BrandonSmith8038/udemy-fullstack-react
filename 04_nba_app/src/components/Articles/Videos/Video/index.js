import React, { Component } from 'react'
import axios from 'axios'
import { JSON_SERVER } from '../../../../config'

import Styles from '../../../Articles/articles.css'
import Header from './Header'
import VideosRelated from '../../../Widgets/VideosList/VideosRelated/VideosRelated'


class VideoArticle extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  }
  
  componentWillMount(){
    axios
      .get(`${JSON_SERVER}/videos?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];

        axios.get(`${JSON_SERVER}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
          this.getRelated()
        });
      });
  }
  
  getRelated = () => {
    axios.get(`${JSON_SERVER}/teams`)
    .then(response => {
      let teams = response.data
      
      axios.get(`${JSON_SERVER}/videos?q=${this.state.team[0].city}&_limit=3`)
      .then(response => {
        this.setState({
          teams,
          related: response.data
        })
      })
    })
  }
  render(){
    const { article, team } = this.state
    console.log(this.state)
    return(
      <div>
        <Header teamData={team[0]} />
        <div className={Styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          >
          </iframe>
          <VideosRelated 
            data={this.state.related}
            teams={this.state.teams}
          />
        </div>
      </div>
    )
  }
}

export default VideoArticle