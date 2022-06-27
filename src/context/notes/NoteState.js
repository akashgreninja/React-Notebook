import React,{useState} from "react";
import noteContext from "./NoteContext";


const NoteState=(props)=>{
    const s1={
        "name":"akash",
        "age":"12"
    }
    const [state, setState] = useState(s1)
    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"sasa",
                "age":"1asas2"
            })
        }, 1000);
    }
    return(
    <noteContext.Provider value={{state,update}}>
        {props.children}
    </noteContext.Provider>
    )

}


export default NoteState