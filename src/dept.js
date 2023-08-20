import { NavLink, Outlet,  } from "react-router-dom";
import { FaPlaceOfWorship,FaMotorcycle,FaLaptop,FaAnchor,FaMedapps,} from "react-icons/fa";


 export function Dept(){

    return(
        <>
            
            <div className="aboutnav">
              <nav>
                <ul>
                <li> <NavLink to="civil" className="link2"><i><FaPlaceOfWorship/></i>Civil</NavLink></li>
                <li><NavLink to="mech" className="link2"><i><FaMotorcycle/></i>Mech</NavLink></li>
                <li><NavLink to="cse" className="link2"><i><FaLaptop/></i>Cse</NavLink></li>
                <li><NavLink to="marine" className="link2"><i><FaAnchor/></i>Marine</NavLink></li>
                <li><NavLink to="ece" className="link2"><i><FaMedapps/></i>Ece</NavLink></li>
                </ul>
                 </nav>
                 </div>
     
           <Outlet></Outlet>
            
                   

                




        </>
    )
}