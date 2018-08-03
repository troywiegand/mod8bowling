import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class About extends Component {

 

  render() {
    return (
      <div className="About">
    <center><h1>mod 8 Bowling</h1>
    <p> 
        mod 8 Bowling is a variant on inferior bowling. There are two main differences:
        </p>
        <p>
        1) mod 8 Bowling uses mod 8 in base 10 as opposed to just base 10  e.g. 7 pins is a strike/spare and a 8 pins is a score of 0 
    </p>
    <p>
        2) mod 8 Bowling adds a Late Game Discount. The Late Game Discount will continue to use the mod operator because  
    </p>
        
        <br />
        <p> If you would like to calculate your score:  
           <NavLink to='/score'>  
             CLICK HERE 
            </NavLink>
        </p>
    </center>
    
      </div>
      
    );
  }

  
}






export default About;
