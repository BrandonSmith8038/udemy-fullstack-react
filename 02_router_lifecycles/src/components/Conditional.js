import React from 'react'

const Conditional = () => {
  const value = true
  
  const returnValue = () => {
    return false
  }
  
  const showIt = () => {
    return (
      <div><h1> showIt Is True</h1></div>
    )
  }
  return (
   <div>
    {value === true ? <div><h1>Return Value Is True</h1></div> : null}
    {value ? <div><h1>Return Value Is True</h1></div> : null}
    {value ? <div><h1>Return Value Is True</h1></div> : null}
    {returnValue() && <div><h1>Return Value Is True</h1></div>}
    {showIt()}
   </div>
  )
}

export default Conditional