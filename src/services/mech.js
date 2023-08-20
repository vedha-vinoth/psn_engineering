import mech1 from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/departpics/mech2.jpeg'
import mech2 from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/departpics/mech1.jpeg'


function Mech(){
    return(
        <>
        <div className="mech">
            <h1> Department of Mechanical Engineering</h1>
            <div className="mechimges">
                <img src={mech1} alt="mech1"></img>
                <img src={mech2} alt="mech2"></img>

            </div>
            <h2>About The Department</h2>
         
        <p>The Department of Mechanical Engineering was established in the year 2009. Later on PG course M.E Cryogenic Engineering established during the year 2011.The Department approved Research Centre from anna university during 2016.The Department has excellent lab facilities with latest equipment’s and software’s. The faculty members are well experienced and committed to work for student developments. The Department gives importance not only to academic education, but also ethical values and personality development programmes were organized for the student. The students of Mechanical Engineering regularly participate various co-curricular and extracurricular events. The Department has exclusive Computer Centers equipped with Core i7 processor and software packages like Auto CAD, Solid works, and Ansys for Analysis. The Department gives continues training program towards the placement of the students with BOSCH Rexroth training centre. The Department also had a research centre facility for doing doctoral of philosophy. The Department always motivate the Faculty members and the students to learn and leap with innovation things and new technology.</p>
        </div>
        <br></br>
        <br></br>
        </>
    )
}
export default Mech