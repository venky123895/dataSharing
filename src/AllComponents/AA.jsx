import React from 'react'
import BB from './BB'
import { useState } from 'react'
import { createContext } from 'react'
export const MyContext=createContext()
const AA = () => {
    const[pass,setPass]=useState();
    const[sharing,setSharing]=useState();
  return (
    <div>
        <h1>A Component</h1>
        <input type='text' placeholder='Enter text' onChange={(e)=>{
            setPass(e.target.value)
        }}/> 
        <button onClick={()=>{
            setSharing(pass)
        }}>Submit</button>
        <hr/>
        <MyContext.Provider value={{sharing}}>
        <BB/>
        </MyContext.Provider>
        
    </div>
  )
}

export default AA