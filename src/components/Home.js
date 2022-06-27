import React,{useContext} from "react";
import notecontext from '../context/notes/NoteContext.js'
import Notes from "./Notes.js";
// import addNotes from "./addNotes.js";
export default function Home() {
  // const context=useContext(notecontext)
  // const{notes,setnotes}=context
  return (
    <>
      <Notes/>
    </>
  );
}
