import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext.js'

const AddNotes = () => {
  const context=useContext(noteContext)
  const{addNote}=context
  const [note, setNote] = useState({title:"",description:"",tag:""})
  const handleOnClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})

  } 
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="container">
      <h1>ADD A NOTE</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            aria-describedby="emailHelp"
            value={note.title}
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
            id="description"
            name='description'
            onChange={onChange}
            minLength={5} required
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name='tag'
            value={note.tag}
            onChange={onChange}
           
            minLength={5} required
            
          />
        </div>

        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleOnClick}>
         Add note
        </button>
      </form>
      </div>
    </>
  )
}

export default AddNotes