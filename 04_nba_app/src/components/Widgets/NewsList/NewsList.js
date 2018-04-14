import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
import { Link } from 'react-router-dom'
import axios from 'axios'

import { JSON_SERVER } from '../../../config'
import Styles from './NewsList.css'

class NewsList extends Component {
  
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  componentDidMount(){
    this.request(this.state.start, this.state.end)
  }
  
  request = (start, end) => {
    console.log(this.state.end)
    axios.get(`${JSON_SERVER}/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items,...response.data]
      })
    })
  }
  
  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end,end)
    this.setState({
      end
    })
  }
  
  renderNews = type => {
    let template = null
    
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => {
          const { title, id } = item
          return (
            <div key={i}>
              <div className={Styles.newsList_item}>
                <Link to={`/articles/${id}`}>
                  <h2>{title}-{id}</h2>
                </Link>
              </div>
            </div>
          )
        })
        break;
      default:
        template = null
    }
    return template
  }
  
  render() {
    return (
      <div>
        { this.renderNews( this.props.type ) }
        <div onClick={() => this.loadMore()}>
          LOAD MORE
        </div>
      </div>
    )
  }
}

export default NewsList