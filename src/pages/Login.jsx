import React,{useState} from 'react'

import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Login=()=>{
  const navigate=useNavigate()
  const [input,setInput]=useState({
    
   email:"",
   
    pass:"",
   
    })
    function change(event){

      setInput({...input,[event.target.name]:event.target.value})
      
       }

  let submithandler = (event) => {
    

     event.preventDefault()
      
       axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2pdfCFnHdyClx3jD1MnzyQSOdesvWCEg",
      
       {
      
     email:input.email,
      
      password:input.pass,
      
      returnSecureToken: true
      
       }).then((data) => {
      
      console.log(data)
      
       navigate("/home")
      
       }).catch((error) => {
      
      console.log(error)
      
      alert((error.response.data.error.message))
      
       })
      
       }
return (
  
      <div className="container">
        
        <div className='login'>Login</div>  
      <form onSubmit={submithandler}>

    <input type="email" placeholder='Email'  onChange={change} value={input.email}  name="email"required/>
    <input type="password" placeholder='Password'  onChange={change} value={input.pass}  name="pass" required />


    </form>
<button >Sign in</button>
 <span>something went wrong!</span>

<p>You don't have an account? </p>
<Link to={"/home"} style={{ textDecoration: "none" }}>
            Home
          </Link>
    

      </div>
      
)
}
export default Login