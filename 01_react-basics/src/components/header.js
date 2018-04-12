import React, { Component } from 'react'
import '../css/styles.css'


export default class Header extends Component {
    
    
    
    state = {
      keywords: ''
    }
  
  
  inputChangeHandler = e => {
    const { value } = e.target
    
    this.setState({ 
      keywords: value, 
    })
  }
  
  render(){
    
    
    return (
      <header className={this.state.active}>
        <div className="logo">
          Logo
        </div>
        <input 
          type="text" 
          value={this.state.keywords} 
          onChange={this.inputChangeHandler}
        />
      </header>
    )
  }
} 


  
