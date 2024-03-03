import { useState } from "react"

let nextId = 0;

export default function Form(){
    const [title, setTitle] = useState("")
    const [items, setItems] = useState([])
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")


    function handleEdit (id,title){
        setEditId(id)
        setEditTitle(title)
    }

    function handleSaveEdit (){
        setItems(items.map(item =>{
            if(item.id === editId){
                return{...item, title: editTitle}
            }
            return item
        }))
        setEditId(null)
        setEditTitle("")
    }

    function handleDelete(id) {
        setItems(items.filter(item => item.id !== id ))
    }

    return(
       <>
        <input value={title} onChange={e=>setTitle(e.target.value)} />
        <button onClick={()=>{
            setItems([ ...items,{id: nextId++, title: title}])
        }}>Add</button>
        <ol>
            {items.map(item => (
                <div key={item.id}>

                <li>{item.id === editId ? (<input value={editTitle} onChange={(e)=>{setEditTitle(e.target.value)}}/>) : (item.title)}</li>

                <button onClick={()=>handleEdit(item.id, item.title)} key={`edit-${item.id}`}>Edit</button>

                <button onClick={()=>{ handleDelete(item.id)}} key={`delete-${item.id}`}>Delete</button>

                {editId === item.id && <button onClick={()=>handleSaveEdit()}>Save</button>}
                </div>
            ))}
        </ol>
       </>

       
    )
}