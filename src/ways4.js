import { Link } from "react-router-dom";
import React, { useState} from "react";
import ADD4 from "./addWays4";
import List4 from "./listWays4";
export default function Ways4({newData}) {
  const StorageTitle=JSON.parse(localStorage.getItem('todolist'))
  const [titleData, setTitleData] = useState(StorageTitle??[]);
  const handleAdd = (newTitle) => {
    setTitleData(()=>{
      let dataTodolist=[newTitle, ...titleData]
      let jsonStr=JSON.stringify(dataTodolist)
      localStorage.setItem('todolist',jsonStr)

      return dataTodolist;
    })
  }
  const handleDelete = (index)=>{
    // setTitleData([...titleData])
    setTitleData(()=>{
      const a=titleData.slice(0,index)
      const b=titleData.slice(index+1)
      const c=[...a,...b]
      let jsonStrDelete=JSON.stringify(c)
      localStorage.setItem('todolist',jsonStrDelete)

      return c;
    })
  }
  const handleUpdate=(index,value)=>{

    setTitleData(()=>{
    const a=titleData.slice(0,index) 
    const b=titleData.slice(index+1)
    const c=[value,...a, ...b]
    let jsonStrUpdate=JSON.stringify(c)
    localStorage.setItem('todolist',jsonStrUpdate)

    return c;
  })
  }
  return (
    <div className="Ways4">
      <h1 style={{ textAlign: "center" }}>ToDoList4</h1>
      <div className="link" style={{ textAlign: "center" }}>
        <Link to="/">Way1</Link>||
        <Link to="/Ways2">Way2</Link>||
        <Link to="/Ways3">Way3</Link>
      </div>
      <div className="ToDoList">
        <ADD4 add={handleAdd} />
        <List4 data={titleData} deleteList={handleDelete} updateList={handleUpdate}/>
      </div>
    </div>
  );
}
