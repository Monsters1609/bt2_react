import {Link} from 'react-router-dom';
import { useState } from 'react';
export default function Add(){
    const  [title,setTitle]=useState('');
    const handleSave=()=>{
        console.log("handleSave - " + title);
        if(title !== "") {
            const value= localStorage.getItem("title")  //"null"
            if(value != null){
                const sumStr=value+","+title;//"null,b"
                localStorage.setItem("title",sumStr);//"b"
                setTitle('')
            } 
            else{
                localStorage.setItem("title",title);
                setTitle('')
            }
        }
    }
    const onChangeHandle=(e)=>{
        setTitle(e.target.value)
    }
    return(
        <div className="Add">
            <label htmlFor="inputList">TitleName</label>
            <input id='inputList' value={title} placeholder='Enter Title Name' onChange={onChangeHandle} />
            <button onClick={handleSave}>
                <Link to='/'>submit</Link>
            </button>
        </div>
    )
}