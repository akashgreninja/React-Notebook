import React from "react";
// import notecontext from '../context/notes/NoteContext.js'
import Notes from "./Notes.js";
// import addNotes from "./addNotes.js";
export default function Home(props) {
  const{showAlert}=props;
  // const context=useContext(notecontext)
  // const{notes,setnotes}=context
  return (
    
    <>
    
      {localStorage.getItem('token')?<Notes showAlert={showAlert}/>:<h1>please sign in to continue</h1>}
      {/* <Notes showAlert={showAlert}/> */}
    </>
  );
}
