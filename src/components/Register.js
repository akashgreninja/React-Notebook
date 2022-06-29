
import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom'





const Register = (props) => {
  let navigate= useNavigate();
  const [details, setdetails] = useState({name:"",email:"",password:"",cpassword:""})
  const onChange=(e)=>{
    setdetails({...details,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    // const success=false 
    e.preventDefault()
    const {name,email,password}=details;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

       
          // 'Accept':'application/json' 
      },
    body:JSON.stringify({name,email,password})
    });
    const json =await response.json()
    console.log(json);
    if (json.success){
      localStorage.setItem('token',json.authtoken)
      navigate('/')
      props.showAlert("Acoount Created sucessfully","success")
    }else{
      props.showAlert("Invalid credentials","danger")
    }
   



  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            name="name"
            onChange={onChange}
            minLength={1}
            required
          />
          
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
            minLength={5}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else really .
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
           Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        
         
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
