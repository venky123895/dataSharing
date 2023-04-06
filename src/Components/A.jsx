import React from 'react'
import { createContext } from 'react'

import B from './B'
import { useState } from 'react'
export const GlobalData=createContext();
const A = () => {
    const[data,setData]=useState();
  return (
    <div>
        <h1>A Componets</h1>
        <p>D Component Data:{data}</p>
        <hr/>
        <GlobalData.Provider value={{setData}}>
        <B/>
        </GlobalData.Provider>
       
    </div>
  )
}

export default A