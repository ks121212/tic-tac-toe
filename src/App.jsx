import React from "react";
import { useState } from "react";


function Button(){

  return(
    <button onClick={onClick}></button>
  )
}

function App (){
   const [squares,setSquares]=useState(Array(9).fill(null));



 return (
 <div>
  <h1>Tic-Tac-Toe</h1>
  <div>
    <Button value={value} onClick={clickHandler}/>
    <Button />
    <Button />
  </div>
  <div>
    <Button />
    <Button />
    <Button />
  </div>
  <div>
    <Button />
    <Button />
    <Button />
  </div>
 </div>
 )
}

export default App;