import React, { Component } from 'react'
import axios from 'axios'
import NewsSlider from '../Widgets/NewsSlider/Slider';
import NewsList from '../Widgets/NewsList/NewsList'

import { JSON_SERVER } from '../../config'


class NewsHome extends Component {
  render(){
    return(
      <div>
        <NewsSlider 
          type="featured"
          start={0}
          amount={1}
          settings = {{
            dots: false
          }}
        />
        <NewsList
          type="PicCard"
          loadmore={true}
          start={1}
          amount={5}
        />
        
      </div>
    )
  }
  
  
}

export default NewsHome