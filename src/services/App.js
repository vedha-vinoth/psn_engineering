import { Route, Routes,NavLink} from "react-router-dom";
import Psnabout from "./psnabout";
import Routing from "../Routing";
import Login from "./psnsignup";
import Register from "../register";
import { Dept } from "../dept";
import { Fac } from "../fac";
import Civil from "./civil";

import Cse from "./cse";
import Mech from "./mech";
import Marine from "./marine";
import Ece from "./ece";
import Psncontact from "../psncontact";
import Psnhome from "../psnhome";
import Logout from "./psn";



function App(props){
   
    var  sethide=false
    var  rouhide=false;
      
   var remove=localStorage.getItem("password")
   
   if(remove!=null){
    
    sethide=true
    rouhide=true;
  
    
   }
   else{
    sethide=false;
    rouhide=false;
    setInterval =()=>{
    return window.location.reload(),1000
      }
    
   }
   
      
       
    
    return(
        <>
        {/* {sethide?
        
        (<nav className="nav">
    <ul>  
         
        <li><NavLink  to="/" className="link"> Home</NavLink> </li>
        <li ><NavLink to="/psnabout" className="link"> About</NavLink> </li>
       <li ><NavLink to="/psncontact" className="link" >Contact</NavLink> </li>
       <li ><NavLink to="/psn" className="link" >logout</NavLink> </li>  


       
    </ul>
</nav>):null} */}




        
        <Routes>

    

        <Route path="/" element={<Register></Register>}> </Route>
        <Route path="/psnsignup" element={<Login></Login>}></Route>
    
       <Route path ="/psnhome"     element={<Psnhome></Psnhome>}></Route>
        <Route path="/psnabout" element={<Psnabout></Psnabout>}>
            <Route path="fac" element={<Fac></Fac>}></Route>
            <Route path="dept" element={<Dept></Dept>}>
                <Route path="civil" element={<Civil></Civil>}></Route>
                <Route path="cse" element={<Cse></Cse>}></Route>
                <Route path ="mech" element={<Mech></Mech>}></Route>
                <Route path="marine" element={<Marine></Marine>}></Route>
                <Route path ="ece" element={<Ece></Ece>}></Route>
            </Route>
         
        </Route>

        <Route path ="/psncontact" element={<Psncontact></Psncontact>}></Route>
        <Route path ="/psn" element={<Logout></Logout>}></Route>
      
      
      
       </Routes>  
    
    
       
        </>
    )
}
export default App