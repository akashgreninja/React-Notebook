import React,{useContext,useEffect,useRef,useState} from 'react'
import notecontext from '../context/notes/NoteContext.js'
import Noteitem from './Noteitem.js'
import AddNotes from './addNotes.js'
import { useNavigate } from 'react-router-dom'

function Notes(props) {
  let navigate= useNavigate();
   
    const context=useContext(notecontext)
    const{notes,allNotes,editNote}=context;

    useEffect(() => {
      if(localStorage.getItem('token')){
        allNotes()
        
      }
      else{
        navigate('/')
      }
     
    
      // eslint-disable-next-line 
    }, [])
  
    const ref = useRef(null)
    const refClose=useRef()
    const [note, setnote] = useState({id:"",etitle:"",edescription:"",etag:""})
    
    const updateNote=(random)=>{
      ref.current.click()
      // console.log(random._id)
      setnote({id:random._id,etitle:random.title,edescription:random.description,etag:random.tag})
      props.showAlert("updated sucessfully","success")
      // console.log(note.id)
     
    }

    const handleOnClick=(e)=>{
      // console.log("updating"+note)
      editNote(note.id,note.etitle,note.edescription,note.etag)
      // console.log(note.id)
    
      refClose.current.click()
      props.showAlert("updated sucessfully","success")

    
  
    } 
    const onChange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }
 
  return (
    <>
    <AddNotes showAlert={props.showAlert}/>
  

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
            minLength={5} required
           
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
            minLength={5} required
           
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name='etag'
            value={note.etag}
            onChange={onChange}
           
          />
        </div>

      </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  disabled={note.etitle.length<5 || note.edescription.length<5} type="button"  onClick={handleOnClick} className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
      
    <div className="row my-3">
      <h1>yOUR NOTES</h1>
      {notes.length===0 &&'No notes to display'}
      {notes.map((element)=>{
        return <Noteitem key={element._id} note={element} updateNote={updateNote} showAlert={props.showAlert} />
      })}
      </div>
      </>
  )
}

export default Notes