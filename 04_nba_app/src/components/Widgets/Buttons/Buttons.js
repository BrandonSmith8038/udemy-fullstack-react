import React from 'react'
import { Link } from 'react-router-dom'

import Styles from './Buttons.css'

const Buttons = (props) => {
  const { type, cta, loadMore } = props
  
  let template  = null
  
  switch(type){
    case "loadMore":
      template = (
        <div
          className={Styles.blue_btn}
          onClick={loadMore}  
        >
          {cta}
        </div>
      )
      break;
    default:
      template = null
      break;
  }
  return template
}

export default Buttons