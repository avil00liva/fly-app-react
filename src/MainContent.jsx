import React, {useState} from "react"
import BtnPrimary from "./BtnPrimary"
import Footer from "./Footer"
import Form from "./Form"
import Records from "./Records"

const MainContent = ()=>{
  const [showForm, setShowForm] = useState(false)

  const showFunction = ()=>{
    setShowForm(true)
  }

  return (
    <div className="mainContainer">
      <BtnPrimary text="+ Nuevo vuelo" action={showFunction}/>
      <div className="mainContent">
        <Form showForm={showForm} />
        <Records />
      </div>
    </div>
  )
}

export default MainContent