import React, {createContext, useEffect, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    

  return (
    <StoreContext.Provider value={{}}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider