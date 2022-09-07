import {Link} from 'react-router-dom';

import { useState,useEffect} from 'react';
export default function List() {
  const [listTitle,setListTitle]=useState([])
  
  useEffect(() => {
    let list = localStorage.getItem('title');
    if(list != null ) {
      const data=list.split(",");
      setListTitle(data)
    }
    
  }, [])

  return (
    <div className="List">
      <h1 style={{textAlign:"center"}}>Welcome to the ToDoList</h1>
      <div className='link' style={{textAlign:"center"}}>
          <Link to="/Ways2">Way2</Link>||
          <Link to="/Ways3">Way3</Link>||
          <Link to="/Ways4">Way4</Link>
      </div>
      <ol>
        {listTitle.reverse().map((e,a)=>{
          return(<li key={a}>{e}</li>)
        })}
      </ol>
      <button>
          <Link to="/add">add</Link>
      </button>
    </div>
  );
}


