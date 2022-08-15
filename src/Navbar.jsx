import React from "react"

const Navbar = ()=>{
  return (
    <nav>
      <div style={{display: "flex", alignItems: "center", gap: "7px", textTransform: "uppercase", cursor: "pointer"}}>
        <div className="logo"></div> 
        logo
      </div>
      <div className="navMenu">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  )
}

export default Navbar