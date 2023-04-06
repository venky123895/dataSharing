import React from 'react'
import { useContext } from 'react'
import { MyContext } from './AA'
const DD = () => {
    const{sharing}=useContext(MyContext)
  return (
    <div>
        <h1>D Component</h1>
        <p>Data From A : {sharing}</p>
    </div>
  )
}

export default DD