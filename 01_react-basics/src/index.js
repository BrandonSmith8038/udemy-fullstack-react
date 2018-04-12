import React, {Component} from 'react'
import reactDom from 'react-dom'

import JSON from './db.json'

import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
  
  state = {
    news: JSON,
    filtered: []
  }
  
  getKeyword = (e) => {
    const { value } = e.target
    let filtered = this.state.news.filter(({ title }) => {
      return title.indexOf(value) > -1
    })
    this.setState({
      filtered
    })
  }
  
  render(){
    const { news, filtered } = this.state
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={filtered.length ? filtered : news} />
      </div>
    )
  }
}

reactDom.render(<App />,document.getElementById('root'))