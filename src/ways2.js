import {Link} from "react-router-dom"
import React, { useState } from "react"
export default function Ways2(){
    const [titles,setTitles]=useState([])//cha

    const [title,setTitle]=useState('')//state con add
    const handleSubmit=()=>{
            setTitles(e=>[...e,title])
            setTitle('')
    }
    return(
        <div className="Ways2">
            <h1  style={{textAlign:"center"}}>Way2</h1>
            <div className="link" style={{textAlign:"center"}}>
                <Link to="/">Way1</Link>||
                <Link to="/Ways3">Way3</Link>||
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