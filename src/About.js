import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class About extends Component {

 

  render() {
    return (
      <div className="About">
    <center><h1>mod 8 bowling</h1>
    <p> 
        mod 8 Bowling is a variant on regular bowling. 
    </p>
        
        <br />
        <p> If you would like to see your score:
           <NavLink to={"/score"}>  
             Click Here 
            </NavLink>
        </p>
    </center>
    
      </div>
      
    );
  }

  
}






export default About;