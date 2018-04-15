import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/Slider';
import NewsList from '../Widgets/NewsList/NewsList'
import VideosList from '../Widgets/VideosList/VideosList'

console.log(process.env.NODE_ENV)
const Home = () => (
  <div>
    <NewsSlider 
      type="featured"
      start={0}
      amount={3}
      settings = {{
        dots: false
      }}
    />
    <NewsList
      type="card"
      loadmore={true}
      start={3}
      amount={3}
    />
    <VideosList
      type="card"
      title={true}
      loadMore={true}
      start={0}
      amount={4}
    />
  </div>
);

export default Home;
