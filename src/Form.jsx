import React, {useState} from "react"
import BtnPrimary from "./BtnPrimary"
import plane from "./assets/images/plane-3.jpg"
import { useData } from "./context/Context"
import Loader from "./Loader"
import Toast from "./Toast"


const tipoClases = [
  { id: 1, type: "First Class"},
  { id: 2, type: "Business"},
  { id: 3, type: "Turista"},
  { id: 4, type: "Economy"}
]

const Form = ({showForm})=>{
  const [clases, setClases] = useState(tipoClases)
  const [fullname, setFullname] = useState("")
  const [dni, setDni] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [seat, setSeat] = useState("")
  const { registros, setRegistros} = useData()
  const [loaderActive, setLoaderActive] = useState(false)
  const [toastShow, setToastShow] = useState(false)
  
  const submitData = (e)=>{
    e.preventDefault()
    setLoaderActive(true)
    const timer = setTimeout(() => {
      setRegistros([...registros,{fullname: fullname, dni: dni, clase: selectedClass, seat: seat, id: registros.length}])
      setFullname("")
      setDni("")
      setSeat("")
      setSelectedClass("0")
      setLoaderActive(false)
      setToastShow(true)
    }, 300);
  }

  const warning = ()=>{
    setToastShow(true)
    setSelectedClass("")
  }

  return (
    <>
    {showForm && 
      <div className = "formComponent">
      <div className="formContainer">
        <h1 style={{marginBottom: "7px"}}>Ingresá los datos para registrar un vuelo</h1>
        <input type="text" value={fullname} placeholder="Ingresar Nombre y Apelllido" onChange={e => setFullname(e.target.value)} required />
        <input type="text" value={dni} placeholder="Ingresar DNI" onChange={e => setDni(e.target.value)} required/>
        <select value={selectedClass} onChange={(e)=>{setSelectedClass(e.target.value)}}>
          <option value="0">Seleccione una clase</option>
          {clases.map((c)=>{
            return (
              <option key={c.id} value={c.type}>{c.type}</option>
            )
          })}
        </select>
        <input type="text" value={seat} placeholder="N° de butaca" onChange={e => setSeat(e.target.value)} required/>
        <div className="btnsFormContainer">
          <BtnPrimary text={"Registrar vuelo"} action={selectedClass == "" || selectedClass == "0" ? warning : submitData}/>
          {loaderActive && <Loader />}
        </div>
      </div>
      <div className="imgFormContainer">
        <img src={plane} alt="plane picture" className="formImg" />
      </div>
      <Toast text={selectedClass == "0" ? "Datos cargados con éxito" : "Seleccione una clase válida"} show={toastShow} setShow={setToastShow} />
      </div>
    }
    </>
  )
}

export default Form