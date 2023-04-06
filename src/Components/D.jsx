import React from 'react'
import { useContext } from 'react'
import { GlobalData } from './A'
import { useState } from 'react'

const D = () => {
    const{setData}=useContext(GlobalData)
    const[share,setShare]=useState();
  return (
    <div>
       <h1>D Component</h1>
       <input type='text' placeholder='Enter Text' onChange={(e)=>{
            setShare(e.target.value)
       }} />
       <button onClick={()=>{
        setData(share)
       }}>Submit</button> 
    </div>
  )
}

export default D