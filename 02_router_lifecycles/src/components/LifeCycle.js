import React from 'react'

const LifeCycles = () => {
  
  return (
    <div>
      <h3>LifeCycles</h3>
      <ol>
        <li>Get Default Props</li>
        <li>Get Default State</li>
        <li>Before Render</li>
        <li>Render Jsx</li>
        <li>
          <ul>
            <li>Component Will Mount</li>
            <li>Component Did Mount Mount</li>
          </ul>
        </li>
        <li>After Jsx</li>
      </ol>
    </div>
  )
}

export default LifeCycles