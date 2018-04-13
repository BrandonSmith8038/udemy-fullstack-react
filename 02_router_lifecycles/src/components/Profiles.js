import React from 'react'
import { Link } from 'react-router-dom'


const Profile = (props) => {
  
  const redir = () => {
    props.history.push('/')
  }
  
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`,
      }}>Take Me To /profiles/posts</Link>
      {redir()}
    </div>
  )
}

export default Profile