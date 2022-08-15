import React from "react"
import BtnPrimary from "./BtnPrimary"
import { useData } from "./context/Context"

const Record = ({clase, dni, seat, fullname, indexR})=>{
  const {registros, setRegistros} = useData()

  const removeItem=(id)=>{
    const updatedItems=registros.filter((reg, index)=>{
        return indexR !== index
    })
    setRegistros(updatedItems)
}

  return (
    <div className="recordCard">
      <div className="flyData">
        <h3>{fullname}</h3>
        <p>DNI: {dni}</p>
      </div>
      <div className="flyData">
        <h3>Clase: {clase}</h3>
        <p>Butaca: {seat}</p>
      </div>
      <BtnPrimary text=" X " action={()=> removeItem(indexR)}/>
    </div>
  )
}

export default Record