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
          {props.cta}
        </div>
      )
      break;
    case "linkTo":
      template = (
       <Link to={props.linkTo} className={Styles.blue_btn}>
        {props.cta}
       </Link>
      )
      break;
    default:
      template = null
      break;
  }
  return template
}

export default Buttons