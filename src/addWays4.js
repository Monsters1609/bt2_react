import { useState } from "react"
export default function ADD4({add}){
    const [title,setTitle]=useState('');

    const handleOnChange=(e)=>{
        setTitle(e.target.value)
    }
    
    const handleAdd=()=>{
        add(title);
        setTitle('')
    }
    return(
        <div>
            <label htmlFor="name">Add</label>
            <input value={title} onChange={handleOnChange} id="name"/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}