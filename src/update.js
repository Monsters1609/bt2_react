// import { useEffect, useState } from "react"
export default function Update({currentTitle, change, changeTitle , currentIndex, updateList}){
    // const[newTitle, setNewTitle]=useState('');

    // useEffect(() => {
    //     setNewTitle(currentTitle)
    // }, [currentTitle])
    
    const handleUpdate=()=>{
        if(currentIndex != null){
            updateList(currentIndex, currentTitle)
            // setNewTitle('')
            change('')
        }
    }
    // const onChangeUpdate=(e)=>{
    //     setNewTitle(e.target.value)
    // }
    return(
        <div className="Update">
            <input value={currentTitle} onChange={changeTitle}/>
            <button onClick={handleUpdate}>update</button>
        </div>
    )
}