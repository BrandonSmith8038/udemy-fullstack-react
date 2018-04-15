import React, { Component } from 'react'
import UserTemplate from './User_Template'



class User extends Component {
  state = {
    name: 'Brandon',
    lastName: 'Smith',
    age: 31,
    mother: 'Maureen',
    color: 'red'
  }
  changeColor(){
    // this.setState({
    //   color: 'blue'
    // })
    this.refs.myColor.style.color="blue"
  }
  
  
  render(){
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>
        <button 
          className="btn"
          onClick={()=>this.changeColor()}
        >
          Click Me
        </button>
        <UserTemplate {...this.state}/>
      </div>
    )
  }
}

export default User