import React,{useContext} from 'react'
import notecontext from '../context/notes/NoteContext.js'
import Noteitem from './Noteitem.js'


function Notes() {
    const context=useContext(notecontext)
    const{notes,setnotes}=context
  return (
    
    <div className="row my-3">
      <h1>yOUR NOTES</h1>
      {notes.map((element)=>{
        return <Noteitem note={element}/>
      })}
      </div>
  )
}

export default Notes