import React from "react"
import BtnPrimary from "./BtnPrimary"

const Toast = ({show, setShow, text})=>{

  const hide = ()=>{
    setShow(false)
  }

  return (
    <div className={show ? "toast toastActive" : "toast"}>
      {text}
      <BtnPrimary text="x" action={hide} />
    </div>
  )
}

export default Toast