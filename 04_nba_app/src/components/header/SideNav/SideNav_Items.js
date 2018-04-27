import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

import style from './SideNav.css'

const items = [
  {
    type: style.option,
    icon: 'home',
    text: 'Home',
    link: '/',
  },
  {
    type: style.option,
    icon: 'file-text-o',
    text: 'News',
    link: '/news',
  },
  {
    type: style.option,
    icon: 'play',
    text: 'Videos',
    link: '/videos',
  },
  {
    type: style.option,
    icon: 'sign-in',
    text: 'Sign In',
    link: '/sign-in',
  },
  {
    type: style.option,
    icon: 'sign-out',
    text: 'Sign Out',
    link: '/sign-out',
  },
]

const showItems = () =>
  items.map(({ type, icon, text, link }) => (
    <div key={text} className={type}>
      <Link to={link}>
        <FontAwesome name={icon} />
        {text}
      </Link>
    </div>
  ))

function SideNavItems() {
  return <div>{showItems()}</div>
}

export default SideNavItems
