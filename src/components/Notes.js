import React,{useContext} from 'react'
import notecontext from '../context/notes/NoteContext.js'
import Noteitem from './Noteitem.js'
import AddNotes from './addNotes.js'


function Notes() {
   
    const context=useContext(notecontext)
    const{notes}=context
  return (
    <>
    <AddNotes/>
      
    <div className="row my-3">
      <h1>yOUR NOTES</h1>
      {notes.map((element)=>{
        return <Noteitem key={element._id} note={element} />
      })}
      </div>
      </>
  )
}

export default Notes