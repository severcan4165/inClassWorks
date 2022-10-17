import React from 'react'
import ButtonStyles from "./button.module.css"

const Button = ({buton}) => {
  return (
    <div className={ButtonStyles.title}>
    <button>{buton}</button>
    </div>
  )
}

export default Button