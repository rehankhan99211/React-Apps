import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {
    // const initialData = 0
const [myData, setmyData] = useState(0) // hooks usestate
useEffect(() => {
// console.log("hi");
document.title = `Chats(${myData})`
})
// },[]) // array dependency


  return (
<>
<div className='center_div'>
    <p>{myData}</p>
    <div className='button2' onClick={()=>setmyData(myData+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCREMENT
    </div>
</div>
</>
  )
}



export default UseEffect