import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



const Register=()=>{
  const navigate=useNavigate()
const [input,setInput]=useState({
    
     name:"",
    email:"",
    pass:"",
    
     })
     function change(event){

      setInput({...input,[event.target.name]:event.target.value})
      
       }

  let submithandler = (event) => {
    
    event.preventDefault()
      
       axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2pdfCFnHdyClx3jD1MnzyQSOdesvWCEg",
      
       {
      
     email:input.email,
      
      password:input.pass,
      
      returnSecureToken: true
      
       }).then((data) => {
      
      console.log(data)
      
       navigate("/login")
      
       }).catch((error) => {
      
      console.log(error)
      
      alert((error.response.data.error.message))
      
       })
      
       }
    return (

       <div>
              <div className="container">
              <span className="register">Register</span>  
              <form onSubmit={submithandler}>
    <input type="text" placeholder='displayname'  onChange={change} value={input.name} name="name" required/>
    <input type="email" placeholder='email'  onChange={change} value={input.email}  name="email"required/>
    <input type="password" placeholder='password'  onChange={change} value={input.pass}  name="pass" required />
    <input style={{display: "none"}} type="file" id="file" />
    </form>
      <img src='' alt=""/>
      
    <button onClick={submithandler}>Sign Up</button>
     <span>Something went wrong</span>
    
    
    <p>You do have an account?</p>
    <Link to={"/login"} style={{ textDecoration: "none" }}>
            Login
          </Link>
    
            </div>
         </div>   
      )
    }
    
    export default Register

