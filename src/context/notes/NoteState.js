import React,{useState} from "react";
import noteContext from "./NoteContext";


const NoteState=(props)=>{
    const notesinitial=[
        {
          "_id": "62b94213365816fdb77472d0",
          "user": "62b7e5689c39d5def6a714f9",
          "title": "the title",
          "description": "wqwqs",
          "tag": "personal",
          "Date": "2022-06-27T05:37:23.527Z",
          "__v": 0
        },
        {
          "_id": "62b94216365816fdb77472d2",
          "user": "62b7e5689c39d5def6a714f9",
          "title": "the jhhjh",
          "description": "wqwqwqwqwqqs",
          "tag": "personal",
          "Date": "2022-06-27T05:37:26.424Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesinitial)

      //to add a note
      const addNote=(title,description,tag )=>{
        console.log("adding")
        let note= {
          "_id": "62b94216365816fdb774asas72d2",
          "user": "62b7e5689c39d5def6a714f9",
          "title":title,
          "description": description,
          "tag": tag,
          "Date": "2022-06-27T05:37:26.424Z",
          "__v": 0
        }
        setnotes(notes.concat(note))
      }

      //to delete a note
      const deleteNote=(id)=>{
        console.log('deleting it '+id)
        const newnotess=notes.filter((note)=>{return note._id!==id})
        setnotes(newnotess)
      }

    
      //to edit a note
      const editNote=(id)=>{

      }


    
    return(
    <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </noteContext.Provider>
    )

}


export default NoteState