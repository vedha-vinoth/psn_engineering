import { useState } from "react"
import { Navigate } from "react-router-dom";




import { RegisterApi } from "./services/api";
import { isAuthenticated } from "./services/auth";


import { StoreUserData } from "./services/storage";

import {FaKey,FaUserTie,FaRegEnvelope,FaRegUserCircle }from 'react-icons/fa';





function Register (){
  const initialstate=({email:{required:false},
                      password:{required:false},
                      name:{required:false}});

              const[exerror,expression]=useState(({email:{required:false},
               password:{required:false} ,
              name:{required:false}}))


  const[loading,setloading]=useState(false)


  const [errors,seterrors]=useState(initialstate)
 

  const [inputs,inputvalues]=useState({
    name:"",
    email:"",
    password:""
    
  })
    //  form submission field
    const handlesubmit=(event)=>{
    event.preventDefault();
    let errors=initialstate;
    let haserror=false;
    let alpha=/^[A-Za-z.]+$/;
    let mailex=/^([a-z A-Z_0-9 ])+\@([a-z A-Z 0-9])+\.com+$/;
    let passex=/^([a-z A-z 0-9 # @ ! $ % ^ & *]{6})+$/
     
    console.log(inputs.name)



       if (!alpha.test(inputs.name)){
           haserror=true;
           exerror.name.required=true
      }
       if(inputs.name === ""){
      errors.name.required=true;
             haserror=true;
             exerror.name.required=false;
        
     }
    


      if(!mailex.test(inputs.email)){
        haserror=true;
       exerror.email.required=true;
       errors.email.required=false;


      
      }
      if(inputs.email === ""){
        errors.email.required=true;
        haserror=true;
        exerror.email.required=false;
        
       }
       if(!passex.test(inputs.password)){
        haserror=true;
        exerror.password.required=true;
        
       }
      
   
    
     if(inputs.password === ""){
      errors.password.required=true;
      haserror=true;
      exerror.password.required=false;
      
     }
     if(!haserror){
      setloading(true)
      //sending api request
      RegisterApi(inputs)
      .then((response)=>{
        console.log(response)
          var user={
         name:response.data.name,email:response.data.email,password:response.data.password
         }
         StoreUserData(user)
      })
      .catch((err)=>{
         
      alert(err)
      })
     .finally(()=>{
      setloading(false)
      })
    }
    seterrors({...errors})
    
  }

  
  

 const handleinputs=(event)=>{
    

    inputvalues({...inputs,[event.target.name]:[event.target.value]})
    
    

    }
    
    if(isAuthenticated()){
    ////re direct 
       return  <Navigate to="/psnsignup"></Navigate>;
      
   
    }
  
  //jsx template 
    
  return(
    <>
    
    
    <div className='container'>
   
    <div className='formsdiv'>

    <form>
     
      <div className="fd">
      <i className="k"><FaRegUserCircle></FaRegUserCircle></i>
    <h1 className="signup">SIGNUP</h1>

     <div className="name-field">
      <label htmlFor='name'>Name</label>
      <br></br>
      <br></br>
      <i className="j"><FaUserTie></FaUserTie>  <input type="mail" id='name' name='name' className='name' onChange={handleinputs}></input></i>
      <br></br>
    { errors.name.required?
     ( <span  className="errorspan">please fill the name</span>):null

    }
    {exerror.name.required? 
     (<span  className="errorspan">fill only characters</span>):null}
     </div>

     {/* this is email field */}
     <div className="email-field">
      <label htmlFor='email'>Email</label>
      <br></br>
      <br></br>
     <i className="j"><FaRegEnvelope></FaRegEnvelope> <input type="mail" id='email' name='email' className='email' onChange={handleinputs} ></input></i>
      <br></br>
      {errors.email.required?
      (<span  className="errorspan">please fill the email</span>):null}
      {exerror.email.required? <span  className="errorspan"> fill the email with in correct format</span>:null}
     </div>


      {/* this is password field */}
      <div className="password-field">
       <label htmlFor='password'>Password</label>
       <br></br>
        <br></br>
      <i className="j"><FaKey></FaKey> <input type="password" id='password' name='password' className='password' onChange={handleinputs}></input></i>
       <br></br>
       {errors.password.required?
       <span  className="errorspan">password required</span>:null}
       {exerror.password.required? (<span  className="errorspan">password should be 6 characters</span>):null}
       </div>

    <br></br>
    <hr></hr>

     {loading?
    (<div className="load">
      <span id="load" className="errorspan">loading *** </span>
     </div>):null}

     <div>
      <input type="submit" value='sign' id="sub" disabled={loading}  onClick={handlesubmit}/>
      
     </div>
     </div>
     </form>
     </div></div>
    
 
    </>
  )
}
export default Register;