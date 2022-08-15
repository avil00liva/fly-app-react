import React, {useContext, createContext, useState} from "react"

const dataContext = createContext()

export function DataContext({children}){
  const [registros, setRegistros] = useState([])

  return (
    <dataContext.Provider value={{registros, setRegistros}}>
      {children}
    </dataContext.Provider>
  )
}

export function useData() {
  return useContext(dataContext)
}