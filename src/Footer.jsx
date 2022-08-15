import React from "react"

const footerItems = [{ name: "Privacidad"}, {name: "Términos"}]

const Footer = ()=>{

  return (
    <div className="footer">
      <ul className="tos">
        <li key={footerItems.length + 1}><strong>© 2022 TP React Vates</strong></li>
        {footerItems.map((item, index)=>{ 
          return(
            <li><span key={index}> {item.name}</span></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Footer