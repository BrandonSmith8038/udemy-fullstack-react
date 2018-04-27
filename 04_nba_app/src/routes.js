import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Layout from './hoc/Layout/Layout'
import NewsArticle from './components/Articles/News/Post/index'
import VideosArticle from './components/Articles/Videos/Video/index'
import NewsHome from './components/News/NewsHome'
import VideosHome from './components/Videos/VideosHome'
import SignIn from './components/SignIn/SignIn'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/news" component={NewsHome} exact />
          <Route path="/videos" component={VideosHome} exact />
          <Route path="/articles/:id" component={NewsArticle} exact />
          <Route path="/videos/:id" component={VideosArticle} exact />
          <Route path="/sign-in" component={SignIn} exact />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
