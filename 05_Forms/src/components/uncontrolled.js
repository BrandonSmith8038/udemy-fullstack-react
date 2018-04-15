import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }
    
    handleSubmit = e => {
        e.preventDefault()
        
        const value = {
            name: this.name.value,
            lastName: this.lastName.value
        }
    }

    render(){
        return(
            	<div className="container">
					UnControlled
					<form>
					  <div className="form_element">
					    <label>Enter Name</label>
					    <input 
					      type="text" 
					      ref={input => this.name = input}
					    />
					  </div>
					  <div className="form_element">
					    <label>Enter Last Name</label>
					    <input 
					      type="text"
					        ref={input => this.lastName = input}
					    />
					  </div>
					  <button onClick={this.handleSubmit}>Sign In</button>
					</form>
			    </div>
        )
    }
}

export default Uncontrolled;