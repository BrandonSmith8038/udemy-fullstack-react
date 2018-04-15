import React, { Component } from 'react';

import FormFields from './Widgets/Forms/formFields'

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Your name'
                }
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter Your lastname'
                }
            },
            message: {
               element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    rows: 3,
                    cols: 36
                } 
            },
            age: {
               element: 'select',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'age_input',
                    rows: 3,
                    options: [
                        {val:'1', text:'10-20'},    
                        {val:'2', text:'20-30'},   
                        {val:'3', text:'30-40'},  
                    ]
                } 
            }
        }
        
    }
    
    updateForm = newState => {
        this.setState({
            formData: newState
        })
    }
    
    submitForm = event => {
        event.preventDefault()
    
        let dataToSubmit = {}
    
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }
        console.log(dataToSubmit)
    }

    render(){
        return(
            <div className="container">
                User
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;