
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let history= useNavigate();

  
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setcredentials({email:"",password:""})
   
        const response = await fetch("https://notepad-greninja.herokuapp.com/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             
                // 'Accept':'application/json' 
            },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json =await response.json()
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            history("/")
            props.showAlert("Signed in Sucessfully","success")

          }else{
            props.showAlert("Invalid credentials","danger")
          }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
      }
  return (
   <>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  value={credentials.password} onChange={onChange} id="password" name='password'/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
   </>
  )
}

export default Login