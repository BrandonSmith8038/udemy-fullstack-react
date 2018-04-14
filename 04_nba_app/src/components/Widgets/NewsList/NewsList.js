import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
import { Link } from 'react-router-dom'
import axios from 'axios'

import { JSON_SERVER } from '../../../config'

class NewsList extends Component {
  
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  componentDidMount(){
    axios.get(`${JSON_SERVER}/articles?_start=${this.state.start}&_end=${this.state.end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items,...response.data]
        })
      })
  }
  
  render() {
    console.log(JSON_SERVER)
    console.log(this.state.items)
    return (
      <div>
        NewsList
      </div>
    )
  }
}

export default NewsList