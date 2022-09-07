import React,{useState} from "react";
import {Link} from "react-router-dom"
export default function Ways3(){
    const StorageTitle =JSON.parse(localStorage.getItem("titles"))
    console.log(StorageTitle)
    const [titles,setTitles]=useState(StorageTitle??[])
    const [title,setTitle]=useState('')
    const handleSubmit=()=>{
            setTitles(e=>{
                const newTitle=[...e,title]
                const titleStorage=JSON.stringify(newTitle)
                localStorage.setItem("titles",titleStorage)
                return newTitle
            })
            
            setTitle('')
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Ways3</h1>
            <div className="link" style={{textAlign:"center"}}>
                <Link to="/">Way1</Link>||
                <Link to="/Ways2">Way2</Link>|| 
                <Link to="/Ways4">Way4</Link> 
            </div>
            <div>
                <label htmlFor="title">Title Name</label>
                <input id='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                <button onClick={handleSubmit}>ADD</button>
            </div>

            <div>
                <ol>
                    {titles.reverse().map((e,index)=>{
                        return(
                            <li key={index}>{e}</li>
                        )
                    })}
                </ol>
            </div>
            
        </div>
    )
}