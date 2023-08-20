import cse1 from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/departpics/cse1.jpeg'
import cse2 from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/departpics/cse2.jpeg'
import {FaLongArrowAltRight}from 'react-icons/fa'

function Cse(){
    return(
        <>
        <div className="cse">
        <h1>Department of Computer Science and Engineering</h1>
        <div className='cseimages'>
        <img src={cse1} alt="cse1" id='cseimg'></img>
        <img src={cse2} alt="cse1" id='cseimg2'></img>
        </div>
       <h2> About The Department</h2>
       <p>The Department of Computer Science and Engineering (CSE) was established since inception from the year 2001 with the aim of providing inclusive technology education to students from all over India thereby creating responsible citizens who would contribute to the betterment of their families, society and nation. Computer Science serves as the foundation for various technological advancements that the world sees today. The field has grown by leaps and bounds. It finds a place in many interdisciplinary fields as well. With these, there also comes a necessity to keep up to the global demand of finding highly skilled engineers and scientists. Our centre of excellence is “Intel Intelligent system lab” in collaboration with Intel company and organized many certification courses periodically.</p>



<h2>Our Objective Is:</h2>
  <li><i><FaLongArrowAltRight/></i>To impart quality education to students.</li>
  <li><i><FaLongArrowAltRight/></i>To create and disseminate knowledge for the betterment of mankind.</li>
  <li><i><FaLongArrowAltRight/></i>To establish a centre of excellence in collaboration with industries, research laboratories and other agencies to meet the changing needs of society.</li>
  <li><i><FaLongArrowAltRight/></i> To provide individual attention and enable character building.</li>
  <li><i><FaLongArrowAltRight/></i>To encourage entrepreneurship skills among students.</li>
  <li><i><FaLongArrowAltRight/></i>In 2010, the Department has been recognized as a Centre for Research, by Anna University to offer Ph.D. programme. The Department has the state-of-the-art facilities for various laboratories, a well equipped seminar hall, Wi-Fi enabled class rooms to support e-Learning, and a department library.</li>

    
        </div>
        </>
    )
}
export default Cse