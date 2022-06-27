import React,{useContext,useEffect,useRef,useState} from 'react'
import notecontext from '../context/notes/NoteContext.js'
import Noteitem from './Noteitem.js'
import AddNotes from './addNotes.js'


function Notes() {
   
    const context=useContext(notecontext)
    const{notes,allNotes}=context;

    useEffect(() => {
      allNotes()
    
      
    }, [])
  
    const ref = useRef(null)
    const [note, setNote] = useState({etitle:"",edescription:"",etag:""})
    
    const updateNote=(currentNote)=>{
      ref.current.click()
      setNote({etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleOnClick=(e)=>{
      e.preventDefault();
    
  
    } 
    const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
 
  return (
    <>
    <AddNotes/>
  

    <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name='etitle'
            aria-describedby="emailHelp"
            value={note.etitle}
            onChange={onChange}
           
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name='edescription'
            value={note.edescription}
            onChange={onChange}
           
          />
        </div>

      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
      
    <div className="row my-3">
      <h1>yOUR NOTES</h1>
      {notes.map((element)=>{
        return <Noteitem key={element._id} note={element} updateNote={updateNote} />
      })}
      </div>
      </>
  )
}

export default Notes