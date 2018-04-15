import React, { Component } from 'react'
import axios from 'axios'
import { JSON_SERVER } from '../../../../config'

import Styles from '../../articles.css'
import Header from './Header'


class VideoArticle extends Component {
  state = {
    article: [],
    team: []
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
        });
      });
  }
  render(){
    const { article, team } = this.state
    console.log(this.state)
    return(
      <div>
        <Header teamData={team[0]} />
      </div>
    )
  }
}

export default VideoArticle