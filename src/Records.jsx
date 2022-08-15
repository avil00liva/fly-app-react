import React from "react"
import { useData } from "./context/Context"
import Record from "./Record"

const Records = ()=>{
  const {registros} = useData()

  return (
    <div className="recordsContainer">
      {registros.length === 0 ? 
        <div style={{alignSelf: "center", display: "flex", alignItems: "center", height: "200px"}}>
          No hay vuelos registrados
        </div>
        :
        <>
          <h3>  Vuelos registrados: </h3>
          <div className="recordList">
            {registros.map((r, index)=>{
              return (
                <Record {...r} indexR={index} key={index}/>
              )
            })}
          </div>
        </>
      }
    </div>
  )
}

export default Records