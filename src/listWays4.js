import { useState } from "react";
import Update from "./update";
import HandleDelete from "./handleDelete";
export default function List4({data, deleteList,updateList}){
    const [currentTitle, setCurrentTitle]=useState('')
    const [currentIndex, setCurrentIndex]=useState(null)
    

// const handleDelete=(index)=>{
//     deleteList(index);
// }

const handleUpdate=(index, value)=>{
    setCurrentIndex(index)
    setCurrentTitle(value)
}
const changeTitle = (e) => {
    setCurrentTitle(e.target.value)
}
const change=(e)=>{
    setCurrentTitle(e)
}
return(
    <div>
        <ol>
            {data.map((value,index)=>{
                return(
                    <li key={index}>
                        {value}
                        <HandleDelete index={index} deleteList={deleteList}/>
                        <button onClick={() => handleUpdate(index, value)}>update</button>
                    </li>
                )
            })}
        </ol>
        <Update currentTitle={currentTitle} change={change} changeTitle={changeTitle} currentIndex={currentIndex}  updateList={updateList}/>
    </div>
)
}
