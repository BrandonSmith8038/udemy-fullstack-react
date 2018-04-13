import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'
import '../css/App.css';

class TransitionComp extends Component{

		state = {
				show: true,
		}
		
		handleToggle(){
			this.setState({
				show: !this.state.show,
			})
		}

		render(){
				return(
						<div style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<Transition
							in={this.state.show}
							timeout={{
								enter: 2000,
								exit: 2000
							}}
							onEnter={node => {
								console.log(node)
							}}
						>
								{ state => (
									<div className={`square square-${state}`} >
											Transitions - {`square square-${state}`}
									</div>
								) }
							</Transition>
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


export default TransitionComp;