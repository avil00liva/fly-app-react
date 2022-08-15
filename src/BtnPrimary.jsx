import React from "react"

const BtnPrimary = ({text, action})=> {
  return (
    <button className="btnMenu" onClick={action}>{text}</button>
  )
}

export default BtnPrimary