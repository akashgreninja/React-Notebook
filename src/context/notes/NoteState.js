import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [];
  const [notes, setnotes] = useState(notesinitial);

  const allNotes = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiN2U1Njg5YzM5ZDVkZWY2YTcxNGY5In0sImlhdCI6MTY1NjIyMjEwMn0.q9JPEcAz0BZxARLXZAWXG1DIFLokRg37sA2LzYqxZ7g",
      },
    });
    const json=await response.json()
    console.log(json)
    setnotes(json)
  };

  //to add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiN2U1Njg5YzM5ZDVkZWY2YTcxNGY5In0sImlhdCI6MTY1NjIyMjEwMn0.q9JPEcAz0BZxARLXZAWXG1DIFLokRg37sA2LzYqxZ7g",
          // 'Accept':'application/json' 
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    console.log("adding");
    let note = {
      _id: "sqasqqqqsqsqss",
      user: "62b7e5689c39d5def6a714f9",
      title: title,
      description: description,
      tag: tag,
      Date: "2022-06-27T05:37:26.424Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };

  //to delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiN2U1Njg5YzM5ZDVkZWY2YTcxNGY5In0sImlhdCI6MTY1NjIyMjEwMn0.q9JPEcAz0BZxARLXZAWXG1DIFLokRg37sA2LzYqxZ7g",
      },
    });
    const json=await response.json()
    console.log(json)
    setnotes(json)
    console.log("deleting it " + id);
    const newnotess = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newnotess);
  };

  //to edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiN2U1Njg5YzM5ZDVkZWY2YTcxNGY5In0sImlhdCI6MTY1NjIyMjEwMn0.q9JPEcAz0BZxARLXZAWXG1DIFLokRg37sA2LzYqxZ7g",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,allNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
