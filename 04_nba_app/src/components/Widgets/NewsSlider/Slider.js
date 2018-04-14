import React, { Component } from 'react';
import axios from 'axios';

import { JSON_SERVER } from '../../../config.js';
import SliderTemplates from './Slider_Templates'

class Slider extends Component {
  state = {
    news: [],
  };
  componentDidMount(){
    axios.get(`${JSON_SERVER}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      .then(response => {
        this.setState({
          news: response.data
        })
      })
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
