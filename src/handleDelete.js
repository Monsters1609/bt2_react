export default function HandleDelete({index,deleteList}){
    const handleBtnDelete=()=>{
        deleteList(index)
    }
    return(
        <button onClick={handleBtnDelete}>delete</button>
    )
}