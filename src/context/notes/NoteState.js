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

    
    return(
    <noteContext.Provider value={{notes,setnotes}}>
        {props.children}
    </noteContext.Provider>
    )

}


export default NoteState