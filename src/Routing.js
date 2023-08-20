import { BrowserRouter, NavLink,  Outlet,  Route, Routes } from "react-router-dom"
import Psnabout from "./services/psnabout"
import Psncontact from "./psncontact"
import Psnhome from "./psnhome"
import { Dept } from "./dept"
import { Fac } from "./fac"
import Cse from "./services/cse";
import Mech from "./services/mech";
import Marine from "./services/marine"
import Ece from "./services/ece"
import Civil from "./services/civil"
import { FaHouseUser,FaWalking,FaMobileAlt } from "react-icons/fa";
import './index.css'

import Logout from "./services/psn"
import Login from "./services/psnsignup"


function Routing(){
    return(
        <>
{/*          
 <nav className="nav">
    <ul>
        
         
         <li><NavLink  to="/" className="link"><i><FaHouseUser/></i> Home</NavLink> </li>
         <li ><NavLink to="/psnabout" className="link"> <i><FaWalking /></i>About</NavLink> </li>
        <li ><NavLink to="/psncontact" className="link" ><i><FaMobileAlt/></i>Contact</NavLink> </li>
        <li ><NavLink to="/psn" className="link" ><i><FaMobileAlt/></i>logout</NavLink> </li>  

    </ul>
</nav>  */}
    


       
        <Routes>
            
            <Route path="/psnhome" element={<Psnhome></Psnhome>}>
            
            <Route path="/psnabout"element={<Psnabout></Psnabout>}>
                
                <Route path="dept"element={<Dept></Dept>}>
                    <Route path="civil" element={<Civil></Civil>}></Route>
                    <Route path="cse" element={<Cse></Cse>}></Route>
                    <Route path ="mech"element={<Mech></Mech>}></Route>
                    <Route path="ece" element={<Ece></Ece>}></Route>
                    <Route path="marine" element={<Marine></Marine>}></Route>
                </Route>
                <Route path="fac" element={<Fac></Fac>}></Route>
            </Route>
            <Route path="psncontact"element={<Psncontact></Psncontact>}></Route>
            <Route path="psn"element={<Logout></Logout>}></Route>
            </Route>
            
        </Routes>
        
          
        {/* <BrowserRouter>
         <Routes>        
          <Route path="/" element={<Psnhome></Psnhome>}></Route>
             <Route path="/psnabout" element={<Psnabout></Psnabout>}>
            <Route path="dept" element={<Dept></Dept>}>
            <Route path="civil" element={<Civil></Civil>}></Route>
            <Route path="mech" element={<Mech></Mech>}></Route>
            <Route path="cse" element={<Cse></Cse>}></Route>
            <Route path="marine" element={<Marine></Marine>}></Route>
            <Route path="ece" element={<Ece></Ece>}></Route>
            </Route>
            <Route path="fac" element={<Fac></Fac>}></Route>
            </Route>
            <Route path="/psncontact" element={<Psncontact></Psncontact>}></Route>
        
            <Route path="/psn" element={<Logout></Logout>}></Route>  
            </Routes>
            </BrowserRouter>  */}
            

        </>
    )
}
export default Routing