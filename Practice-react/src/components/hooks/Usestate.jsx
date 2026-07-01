import React, { useState } from 'react'
import "./style.css"

const Usestate = () => {
    const initialData = 0
const [myData, setmyData] = useState(initialData) // hooks usestate
  return (
<>
<div className='center_div'>
    <p>{myData}</p>
    <div className='button2' onClick={()=>setmyData(myData+1)}>
        {/* onClick={()=>myData<15 ?setmyData(myData+1):setmyData(0) ****count upto 15 only *****  */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCREMENT
    </div>
    {/* turnery operator  */}
    <div className='button2'onClick={()=> myData>0 ? setmyData(myData-1): setmyData(0)}> 
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

export default Usestate