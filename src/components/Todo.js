import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,removeOneData,removeOneAll } from '../redux/action';

function Todo() {
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.TodoReducer.list)
    const [data,setData]=useState('')
  return (
    <>
    <div>
        <div>
            <input type="text" value={data} onChange={(e=>setData(e.target.value))} placeholder="type something" />
            <button onClick={()=>dispatch(addTodo(data),setData(''))}>+ </button>
        </div>

        <div style={{display:"flex",  justifyContent: "center", marginTop: "37px"}}>
            {list.map((ele)=>{
                return(
            <div style={{border:"2px solid black" , width:"20%" }} key={ele.id}>
            <h3>{ele.data}</h3> 
            <button onClick={()=>dispatch(removeOneData(ele.id))}>-</button>
        </div>

                )
            })}
        <div>
            <button onClick={()=>dispatch(removeOneAll())}>Remove All</button>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Todo