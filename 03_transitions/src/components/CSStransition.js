import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import '../css/App.css';

class Fade extends Component{
    
    state = {
        show: true
    }
    
   handleToggle(){
    	this.setState({
    		show: !this.state.show,
    	})
    }
    
    render(){
        return(
            <div>
              <CSSTransition
                in={this.state.show}
                timeout={5000}
                classNames="square"
              >
                <div className={`square ${this.state.show}`}>
									CSSTransitions 
								</div>
							</CSSTransition>
                <button 
									onClick={this.handleToggle.bind(this)}
									className="btn"
									>
									{this.state.show ? 'HIDE' : 'SHOW'}
								</button>
            </div>
        )
    }
}


export default Fade;