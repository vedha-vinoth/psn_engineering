  







import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./auth";



import './wel.css'
  
  function  Logout(){
    const history= useNavigate();

         
     const logout=()=>{
      

        localStorage.clear();
        

      

        if(!isAuthenticated()){
          history("/")
          setInterval(window.location.reload(),1000)

           
    }}

    const no=()=>{
  
      if(localStorage.getItem("password")!=null){
         return history("/psnhome")
      
      }

    }
    return(
        <>
         
        <div className="welcome">
        <h1>are you sure you want log out the page</h1>
        
         <div className="button">
         <button onClick={logout} id="yes">YES</button>
         <button onClick={no} id="no">No</button>
         
            
         </div>

    
        </div>
        </>
    )
    }
    export default Logout