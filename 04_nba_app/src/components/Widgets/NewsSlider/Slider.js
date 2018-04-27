import React, { Component } from 'react';
import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase'
import SliderTemplates from './Slider_Templates'

class Slider extends Component {
  state = {
    news: [],
  };
  componentDidMount(){
    firebaseArticles.limitToFirst(3).once('value')
    .then(snapshot => {
      const news = firebaseLooper(snapshot)
      this.setState({
        news
      })
    })
    
    // axios.get(`${JSON_SERVER}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    //   .then(response => {
    //     this.setState({
    //       news: response.data
    //     })
    //   })
  }
  
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    )
  }
}

export default Slider;
