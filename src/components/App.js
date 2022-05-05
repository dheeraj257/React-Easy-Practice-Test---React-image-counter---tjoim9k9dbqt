import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
 const [Width,setWidth]= useState(300)
 const [Height,setHeight]= useState(300)
const sizechanger=()=>{
  setWidth(Width+2);
  setHeight(Height+2)
}
  return (
    <div id="main">
      <img onClick={sizechanger} src={star}  height={Height+"px"} width={Width+"px"} />
    </div>
  )
}


export default App;
