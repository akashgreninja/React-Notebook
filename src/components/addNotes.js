import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext.js'

const AddNotes = () => {
  const context=useContext(noteContext)
  const{addNote}=context
  const [note, setnote] = useState({title:"",description:"",tag:"default"})
  const handleOnClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)

  } 
  const onChange=(e)=>{
    setnote({...note,[e.target.name]:[e.target.value]})
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
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
         Add note
        </button>
      </form>
      </div>
    </>
  )
}

export default AddNotes