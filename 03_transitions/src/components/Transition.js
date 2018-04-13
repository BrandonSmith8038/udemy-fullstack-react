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
							timeout={1}
						>
								{ state => (
									<div style={{
									background: 'tomato', 
									height: '100px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									color: 'white',
									fontSize: '40px',
									width: '100%',
									transition: 'all 1s ease',
									opacity: state === 'exited' || state === 'exiting' ? 0 : 1
									}}>
											Transitions
									</div>
								) }
							</Transition>
								<button 
									onClick={this.handleToggle.bind(this)}
									style={{
										position: 'relative',
									  display: 'inline-block',
									  margin: '0',
									  padding: '1.5rem 4.5rem',
									  background: '#FFEB3B',
									  color: '#009688',
									  fontFamily: 'inherit',
									  fontSize: '1.4rem',
									  fontHeight: '300',
									  lineHeight: 'normal',
									  marginTop: '30px',
									  border: '0',
									  borderRadius: '0.4rem',
									  boxShadow: '-1px 1px 8px rgba(0, 0, 0, 0.4)',
									  cursor: 'pointer'
								}}>
									{this.state.show ? 'HIDE' : 'SHOW'}
								</button>
						</div>

				)
		}
}


export default TransitionComp;