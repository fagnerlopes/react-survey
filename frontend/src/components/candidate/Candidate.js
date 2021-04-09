import React from 'react'

export default function Candidate({candidate}) {
  const { name, votes} = candidate;
  return (
    <div>
      {name} - {votes}      
    </div>
  )
}
