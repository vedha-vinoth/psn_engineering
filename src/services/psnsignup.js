import { useState } from "react"
import { Navigate,useNavigate } from "react-router-dom"

import { isAuthenticated, LogAuth } from "./auth"


import '../App.css'
import { LoginApi } from "./signupApi";
import { LoginStore } from "./storage";

import {FaRegEnvelope,FaRegUserCircle,FaKey }from 'react-icons/fa';






function Login(){

   const initialstate=({email:{required:false},
      password:{required:false},
       });
    const[errors, seterrors]=useState(initialstate)

    
   const[exerror,expression]=useState(({email:{required:false},
                                       password:{required:false},}))

    const [loading,setloading]=useState(false)
     
   
   const [inputs,inputvalues]=useState({
      
      email:"",
      password:""
      
    })
 
    
    
    const handlesubmit =(event)=>{
      event.preventDefault();
      var useremail=localStorage.getItem("useremail")
      var userpassword=localStorage.getItem("userpassword")
      var haserror=false;

      if(useremail!=inputs.email){
         exerror.email.required=true;
         
         errors.email.required=false;
         haserror=true;

      }
     
      if(inputs.email === ""){
         
         errors.email.required=true;
         exerror.email.required=false;
         haserror=true;
           }
      if(inputs.password!=userpassword){
         exerror.password.required=true;
         errors.password.required=false;
         haserror=true;
      }

      if(inputs.password===""){
         errors.password.required=true;
         exerror.password.required=false;
         haserror=true;
      }
      if(!haserror){
         setloading(true)
         LoginApi(inputs)
         .then((response)=>{
            console.log(response)
              var user={
             email:response.data.email,password:response.data.password
             }
             LoginStore(user)})
             .catch((err)=>{
               alert(err)

             })
             .finally(()=>{
               setloading(false)
             })

      }

      seterrors({...errors})
      expression({...exerror})
   }
   const handlechange=(event)=>{
      
      const {name,value}=event.target
      inputvalues({...inputs,[name]:[value]})
      

   }
 
      
  
   
   
   
   if(LogAuth()){
    
       
      return <Navigate to="/psnhome"></Navigate>
   }


   
    return(
        <>

      
      
         

 
   
     <div className='container'>
   
     <div className='formsdiv'>

   <form >
   <div className="fd">
   <i className="k"><FaRegUserCircle></FaRegUserCircle></i>

      <h1 className="signup">LOGIN</h1>

    
   
    
    

    {/* this is email field */}
    <div className="email-field">
     <label htmlFor='email'>Email</label>
     <br></br>
     <i className="j"><FaRegEnvelope></FaRegEnvelope> <input type="mail" id='email' name='email' className='email' onChange={handlechange}></input></i>
     <br></br>
     <br></br>
     {errors.email.required?
     (<span className="errorspan">please fill the email</span>):null}
      {exerror.email.required?  
      (<span className="errorspan"> fill the correct email</span>):null }
    </div>


     {/* this is password field */}
     <div className="password-field">
      <label htmlFor='password'>Password</label>
      <br></br>
      <br></br>
      <i className="j"><FaKey></FaKey> <input type="password" id='password' name='password' className='password'onChange={handlechange}></input></i>
      <br></br>
      {errors.password.required?
       (<span className="errorspan">password required</span>):null}
       {exerror.password.required?
       (<span className="errorspan">enter the correct password</span>):null}
      </div>
       <br></br>
      <hr></hr>

    {loading?
    (<div className="load">
     <span id="load">loading *** </span>
    </div>):null}

    <div>
     <input type="submit" value='login' id="sub" onClick={handlesubmit}/>
     
    </div>
    </div>
    </form>
    </div></div>
   
   
       </>

    )
}

   export default Login;