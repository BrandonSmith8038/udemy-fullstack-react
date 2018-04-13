import React from 'react'

import PropTypes from 'prop-types'

const User_Template =() => {
  return (
    <div>
      Template
    </div>
  )
}

User_Template.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  mother: function(props,propName,componentName){
    if(props[propName] !== "Maureen"){
      return new Error(`The name ${props[propName]} is incorrect should be Maureen`)
    }
  }
}

export default User_Template