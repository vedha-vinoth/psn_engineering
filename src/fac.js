import React from 'react'
import bus from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/transnport.jpeg'
import library from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/library.jpeg'
import canteen from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/canteen (1).jpeg'
import sports from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/sports.jpeg'
import despencary from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/despencery.jpeg'
import hostel from 'C:/Users/LENOVO/Desktop/Psn engineerg college/psn/src/images/hostel1.jpeg'

export function Fac(){

    return(
        <>
        <div className="facilities">

            <div className="bus">
                <img src={bus} alt="bus"></img>
                <span>transnport</span>
             </div>

    
            <div className="library">
                <img src={library} alt="library"></img>
                <span>library</span>
             </div>

             <div className="canteen">
                <img src={canteen} alt="canteen"></img>
                <span>canteen</span>
             </div>

             <div className="sports">
                <img src={sports} alt="sports"></img>
                <span>sports</span>
             </div>

             <div className="despencery">
                <img src={despencary} alt="despencary"></img>
                <span>Dispensary</span>
             </div>

             <div className="hostel">
                <img src={hostel} alt="hostel"></img>
                <span>hostel</span>
             </div>
            </div>
            
        </>
    )
}