import React from 'react'

const CheckBox = ({ id, isDone, onToggle }) => {
  return (
    <input type="checkbox" checked={isDone ? "checked" : ""} className="checkbox" onChange={() => onToggle(id)}/>
  )
}

export default CheckBox