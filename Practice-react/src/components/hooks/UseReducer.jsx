 import React, { useReducer, useState } from 'react'
 import "./style.css"
 
 const UsesReducer = () => {
     const initialData = 10
const [state, dispatch] = useReducer(reducer, initialData)
   return (
 <>
 <div className='center_div'>
     <p>{state}</p>
     <div className='button2' >
   
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         INCREMENT
     </div>
     <div className='button2'> 
         <span></span>   
         <span></span>
         <span></span>
         <span></span>
         DECREMENT
     </div>
 </div>
 </>
   )
 }
 
 export default UsesReducer  