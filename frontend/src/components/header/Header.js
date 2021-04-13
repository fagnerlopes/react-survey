import React from 'react'

export default function Header({children}) {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>{children}</h3>      
    </div>
  )
}
