import React, { Component } from "react";

import FormFields from "./Widgets/Forms/formFields";

class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "Name",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter Your name"
        },
        validation: {
          required: true,
          minLen: 5
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Name",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter Your lastname"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      message: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "message_input",
          rows: 3,
          cols: 36
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: ""
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "age_input",
          rows: 3,
          options: [
            { val: "1", text: "10-20" },
            { val: "2", text: "20-30" },
            { val: "3", text: "30-40" }
          ]
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = newState => {
    this.setState({
      formData: newState
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(dataToSubmit);
    }
  };

  render() {
    return (
      <div className="container">
        User
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onBlur={newState => this.updateForm(newState)}
            change={newState => this.updateForm(newState)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
