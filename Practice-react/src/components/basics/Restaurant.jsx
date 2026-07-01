import React, { useState } from 'react'
import "./style.css"
  import Menu from '../menuApi'
  import MenuCard from './MenuCard'
import Navbar from '../Navbar';


  const uniqueList = [...new Set(Menu.map ((curElem)=>{ return curElem.category;}
  )),"All"]; 
  // the ...is spread operator 
  console.log(uniqueList);
  
const Restaurant = () => {
const [menuData, setMenuData] = useState(Menu)
const [menuList, setMenuList] = useState(uniqueList)

const filterItem =(category)=>{      // function-f,parameter-category
   if(category==="All"){
    
    setMenuData(Menu)
    return
  }

  const updateList= Menu.filter((curElem)=>{  //filter() array ke har element par chalta hai 
// Har element ko curElem bola gaya hai


    return curElem.category === category;
  })
  setMenuData(updateList); // React me setMenuData() state ko update karta hai.
}
  return (
    <>
<Navbar filterItem={filterItem} menuList={menuList} />
<MenuCard menuData={menuData} />
    </>
     )

}
export default Restaurant;