import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class About extends Component {



  render() {
    return (
      <div className="About">
        <center><h1>mod 8 Bowling</h1>
          <p>
            mod 8 Bowling is a variant on inferior bowling. There are two main differences:
        </p>
          <br />
          <p>
            1) mod 8 Bowling uses mod 8 in base 10 as opposed to just base 10  e.g. 7 pins is a strike/spare and a 8 pins is a score of 0
        </p>
          <br />
          <p>
            2) mod 8 Bowling adds a Late Game Discount. The Late Game Discount will continue to use the mod operator. 
            It is active in frames 6 through 10.
          </p>
          <p> At the end of each frame one takes their total score and subtract their (total score)mod(frame number)</p>
          <p>
             e.g. If at the end of frame 6 before the discount, I have 40 points. 
            I take 40mod6 to get 4. I then would subtract that from 40 to get my new score of 36. 
          </p>
          <br />
          <br />
          <p> If you would like to not calculate your score manually:
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
