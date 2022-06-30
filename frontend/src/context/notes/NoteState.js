import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://notepad-greninja.herokuapp.com";
  const notesinitial = [];
  const [notes, setnotes] = useState(notesinitial);

  const allNotes = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
    });
    const json=await response.json()
  
    setnotes(json)
  };

  //to add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
          // 'Accept':'application/json' 
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const note= await response.json()
    setnotes(notes.concat( note));
    
  };

  //to delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
    });
    const json=await response.json()

    setnotes(json)
  
    const newnotess = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newnotess);
  };

  //to edit a note
  const editNote = async (id, title, description, tag) => {
    
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); 
    console.log(json)// parses JSON response into native JavaScript objects


    let newnotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        
        
        element.title = title;
        element.description = description;
        element.tag = tag;
   
      }
      setnotes(newnotes)
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,allNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
