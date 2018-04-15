import React, { Component } from 'react';

class Controlled extends Component {

		state = {
			name: '',
			lastName: ''
		}
		
		handleNameChange(e){
		  const { value } = e.target
		  
		  this.setState({
		    name: value
		  })
		}
		handleLastNameChange(e){
		  const { value } = e.target
		  
		  this.setState({
		    lastName: value
		  })
		}

		render(){
				return(
						<div className="container">
								Controlled
								<form>
								  <div className="form_element">
								    <label>Enter Name</label>
								    <input 
								      type="text" 
								      value={this.state.name}
								      onChange={this.handleNameChange.bind(this)}
								    />
								  </div>
								  <div className="form_element">
								    <label>Enter Last Name</label>
								    <input 
								      type="text" 
								      value={this.state.lastName}
								      onChange={this.handleLastNameChange.bind(this)}
								    />
								  </div>
								</form>
						</div>
				)
		}
}

export default Controlled;