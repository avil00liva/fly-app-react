import React from "react"
import { useData } from "./context/Context"
import Record from "./Record"
import plane from "./assets/images/plane-1.jpg"

const Records = ()=>{
  const {registros} = useData()

  return (
    <div className="recordsMainContainer">
      <div className="imgFormContainer">
        <img src={plane} alt="plane picture" className="formImg" style={{left: "0"}} />
      </div>
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
    </div>
  )
}

export default Records