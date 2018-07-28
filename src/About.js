import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class About extends Component {

 

  render() {
    return (
      <div className="About">
    <center><h1>mod 8 bowling</h1>
    <p> 
        mod 8 Bowling is a variant on inferior bowling. 
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
