import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <div>
      <Link to="/posts/1/cowboy8038">Post 1</Link><br />
      <Link to="/posts/2/cowboy8038">Post 2</Link><br />
      <Link to="/posts/3/cowboy8038">Post 3</Link>
    </div>  
  )
}

export default Posts