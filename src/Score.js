import React, { Component } from 'react';

class Score extends Component {

 constructor(){
     super()
    this.state={
            score: 0,
            frames: {
                f1t1:0, f1t2:0, f2t1:0, f2t2:0, f3t1:0, f3t2:0,
                f4t1:0, f4t2:0, f5t1:0, f5t2:0, f6t1:0, f6t2:0,
                f7t1:0, f7t2:0, f8t1:0, f8t2:0, f9t1:0, f9t2:0,
                f10t1:0, f10t2:0, f10t3:0,
            }
                }
 }

 handleChange = (ev) =>{
     const tempFrames= {...this.state.frames}
     const frameName=ev.target.name
     tempFrames[frameName]=Number(ev.target.value)
    this.setState({frames: tempFrames},   this.updateScore)
 
 }

 updateScore = () =>{
     let score = 0
Object.keys(this.state.frames).map((f)=>{
    
    score+=this.state.frames[f]
    
})
this.setState({score})
 }

    render() {
      return (
        <div className="About">
      <center><h1>mod 8 bowling</h1>
      <p> 
         Enter in your score
      </p>

      <form>
          <h3>Frame 1</h3>
<input name="f1t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name} />
<input name="f1t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 2</h3>
<input name="f2t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f2t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 3</h3>

<input name="f3t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f3t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 4</h3>

<input name="f4t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f4t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 5</h3>

<input name="f5t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f5t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 6</h3>

<input name="f6t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f6t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 7</h3>

<input name="f7t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f7t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 8</h3>

<input name="f8t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f8t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
        <h3>Frame 9</h3>

<input name="f9t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f9t2" type="number"
onChange={this.handleChange}
value={this.state.frames.name} />
        <h3>Frame 10</h3>

<input name="f10t1" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f10t2" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
<input name="f10t3" type="number" 
onChange={this.handleChange}
value={this.state.frames.name}/>
      </form>

      <p className="score"> 
        {this.state.score}
      </p>
          
          <br />
          
      </center>
        </div>
        
      );
    }
  
    
  }
  
  
  
  
  
  
  export default Score;