import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function  Psncontact(){
    return(
        <>

<nav className="nav">
    <ul>  
         
        <li><NavLink  to="/psnhome" className="link"> Home</NavLink> </li>
        <li ><NavLink to="/psnabout" className="link"> About</NavLink> </li>
       <li ><NavLink to="/" className="link" >Contact</NavLink> </li>
       <li ><NavLink to="/psn" className="link" >logout</NavLink> </li>  
       </ul>
</nav>
        <div className="contact">
        <div className="location">
        <h1 className="loca"><FaMapMarkerAlt/></h1>
              <h2 >LOCATION</h2>
              
            <p>PSN engineering & technology
            <br></br>
            (Autonomous Institution)
            <br></br>
            Psn nagar melathediyoor(post),
            <br></br>
            Palayamkottai(Taluk),Tirunelveli-627152
            <br></br>
            Tamilnadu.india</p>




        </div>
        <div className="call">
        <h1 className="loca"><FaPhoneAlt /></h1>
            <h2>CALL NOW</h2>
            <p>+917339149047,234567,876543</p>
            <br></br>
              <h2>MOBILE</h2>
              <p>+9146342796680</p>
        </div>
        <div className="mailus">
            <h1 className="loca"><FaEnvelopeSquare/></h1>
            <h1>
                MAIL US
            </h1>
            <p>prinicipal@psncet.ac.net</p>
        
        </div>


        </div>
        </>
    )
}
export default Psncontact