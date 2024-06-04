import React, { useEffect, useState } from 'react'

export const useDebounce = (inp,time) => {
 
    const[dbval,setdbval]=useState(inp);
  
    useEffect(()=>{
  
      let val=setTimeout(()=>{
        console.log("triggering");
        setdbval(inp);
      },time)
  
      return()=>{
        clearTimeout(val);
      }
    },[inp])
    return dbval;
}

