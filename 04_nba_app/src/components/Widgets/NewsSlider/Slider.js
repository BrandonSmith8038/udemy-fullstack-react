import React, { Component } from 'react';
import axios from 'axios';

import { JSON_SERVER } from '../../../config.js';
import SliderTemplates from './Slider_Templates'

class Slider extends Component {
  state = {
    news: [],
  };
  
  componentDidMount(){
    axios.get(`${JSON_SERVER}/articles?_start=0&_end=3`)
      .then(response => {
        this.setState({
          news: response.data
        })
      })
  }
  
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type="featured"/>
      </div>
    )
  }
}

export default Slider;
