import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/Slider';
import NewsList from '../Widgets/NewsList/NewsList'
import VideosList from '../Widgets/VideosList/VideosList'

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
      loadMore={false}
      start={0}
      amount={0}
    />
  </div>
);

export default Home;
