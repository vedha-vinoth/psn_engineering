import { NavLink, Outlet} from "react-router-dom"
import { FaBars,FaChild ,FaLongArrowAltRight}from 'react-icons/fa';


import './pabout.css'

function  Psnabout(){
    return(
        <>
        
<nav className="nav">
    <ul>  
         
        <li><NavLink  to="/psnhome" className="link"> Home</NavLink> </li>
        <li ><NavLink to="/" className="link"> About</NavLink> </li>
       <li ><NavLink to="/psncontact" className="link" >Contact</NavLink> </li>
       <li ><NavLink to="/psn" className="link" >logout</NavLink> </li>  
       </ul>
</nav>
           
       
<nav className="aboutnav">



    <ul>
        <li><NavLink to="fac" className="link2"><i><FaChild/></i>Facilities</NavLink> </li>
        <li ><NavLink to="dept" className="link2"><i><FaBars/></i>Department</NavLink></li>
        </ul>
        
</nav>
 <Outlet></Outlet>

     <div className="aboutpsn">
        
    <h1> PSN College of Engineering and Technology(PSNCET),</h1><br></br><hr></hr><li>Tirunelveli, was established by the PSN Educational and Charitable Trust in the year 2001under the leadership of Dr. P. Suyambu a multi – tasked personality with admirable academic brilliance.</li>
   <div className="aboutli">
   <li><i><FaLongArrowAltRight/></i>The College is located at Melathediyoor, 12km away from Tirunelveli unfolding its grandeur over 27 acres of land. The College exhibits an attractive panorama conducive to education and research due to its serene surroundings covered by last rows green trees at the backdrop of mountains with birds chirping all time.</li>

   <li><i><FaLongArrowAltRight/></i>PSN college of Engineering and Technology was conferred with AUTONOMOUS status by University Grants commission(UGC), New Delhi from 2012 – 13 onwards enabling the college to fulfil the aspirations of the students in getting quality education and better employment.</li>

   <li><i><FaLongArrowAltRight/></i>The PSN group with a network of eight institutions has made tremendous strides in the field of higher education. </li>

   <li><i><FaLongArrowAltRight/></i>PSNCET offers 10 UG, 9 PG and 5 PhD programmes. This institution has been recognized u/s (2f,12B) by UGC, accredited by NAAC. The college has four centres of excellence – PSN- BOSCH REXROTH, PSN-INTEL, PCB design and PSN-National Instruments. This is an ISO 9001:2011 certified institution. The College has signed MOU with University of Malaysia Pahang for staff & student  exchange, and collaborative research with VECC, Kolkata. </li>

   </div>
     </div>
           
           
        
        </>
    )
}
export default Psnabout