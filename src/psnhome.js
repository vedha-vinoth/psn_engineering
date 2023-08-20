import Logo from './images/Rajalakshmi_Engineering_College_(REC)_Chennai_Logo.jpg'
import './psn.css'
import { NavLink, Outlet } from 'react-router-dom'
import {FaLongArrowAltRight}from 'react-icons/fa'
function  Psnhome(){
    return(
        <>
          <nav className="nav">
    <ul>  
         
        <li><NavLink  to="/" className="link"> Home</NavLink> </li>
        <li ><NavLink to="/psnabout" className="link"> About</NavLink> </li>
       <li ><NavLink to="/psncontact" className="link" >Contact</NavLink> </li>
       <li ><NavLink to="/psn" className="link" >logout</NavLink> </li>  
       </ul>
</nav>
        
<div className='clghead1'> 
<div className="clghead">
    <div className="logo1">
       <img src={Logo} alt="logoimage"  id="img2-back"></img> 
        <h1>psn</h1>
        <h1 id="h1">Engineering College</h1>
   </div>

   <div className='para'>
     <p className="par"><span>Psn</span> Autonomous insitutionAffilated to anna university approved by <span>Aicte</  span>Accredited by NACC<span>,,</span></p>
</div>
<marquee direction="left" width="60%"><p>Our College is an ISO 9001:2015 Certified Institution and Accredited by NAAC
    Applied for NBA Accreditatio</p></marquee>

</div>
</div> 
  




    <div id="hol-about">
    <div id="about-sec">
  <h2>WELCOME TO PSN COLLEGE OF ENGINEERING AND TECHNOLOGY</h2>
  
   <p> <li><i><FaLongArrowAltRight/></i>PSNCET is an Autonomous Engineering College in Tirunelveli District, Tamilnadu approved by AICTE, UGC Under 12(B) 2   (f)  and Affiliated to Anna University, Chennai.</li> 
   <li><i><FaLongArrowAltRight/></i> Our College is an ISO 9001:2015 Certified Institution and Accredited by NAAC</li> 
   <li><i><FaLongArrowAltRight/></i>Four Centres of Excellence which orient the students to industrial requirements and development</li> 
   <li><i><FaLongArrowAltRight/></i>100% Placement assurance for qualified students under PSNCET Employment Guaranteed scheme </li> </p>
    
  
</div> 
</div>

        </>
    )
}
export default Psnhome