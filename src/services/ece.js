import ece1 from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/departpics/ece5.jpeg'
import{FaLongArrowAltRight}from 'react-icons/fa'
function Ece(){
    return(
        <>
     <div className="ece">
    <h1> Electronics and Communication Engineering</h1>
    <h2> About The Department :</h2>
    <div className='imgp'>
    <img src={ece1} alt="ece" id='eceimg'></img>
   
    <p> <span>T</span>he Department of Electronics and Communication Engineering was started with an objective to impart high quality education in the field of Electronics and Communication Engineering.  The Department has state-of-art labs, qualified and well experienced faculty with the passion for both teaching and research. The Department aims to produce Electronics and Communication Engineers with excellent skills sets to meet the needs of our field. The department has been consistently producing illustrious engineers of fine caliber and enabling them to occupy prestigious position in the academics and in the industrial fields.</p>
 </div>
<div className="ece2">
<h2>Our Objectives Is :</h2>
<hr></hr>
<li><i><FaLongArrowAltRight/></i>To be excel in professional career, in applied research by acquiring the knowledge in the fundamentals of Electronics and Communication Engineering principles and professional skills through rigorous learning – teaching.</li>

<li><i><FaLongArrowAltRight/></i>To be in a position to analyze real life problems and design socially accepted and economically feasible solutions in the field of electronics & communication engineering or other allied engineering or other fields.</li>

<li><i><FaLongArrowAltRight/></i>To involve themselves in lifelong learning and professional development by pursuing higher education and participation in research and development activities to integrate engineering issues to broader social contexts.</li>

<li><i><FaLongArrowAltRight/></i>To exhibit effective communication skills in their professional career, lead a team with good leadership traits and good interpersonal relationship with the members related to other engineering streams.</li>
</div> </div>
<br></br>
        </>
    )
}
export default Ece