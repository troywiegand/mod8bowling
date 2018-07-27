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
            },
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
     let currentFrame=1
Object.keys(this.state.frames).map((f)=>{
    const throwScore =this.state.frames[f]%8
   
    let nextThrowName=''
if(currentFrame<10){
    nextThrowName=f.slice(0,3)+'2'
}
else {nextThrowName=f.slice(0,4)+'2'}


    const nextThrowScore = this.state.frames[nextThrowName]%8
    const nextFrame=(currentFrame+1).toString()

if(f.slice(3).includes('1')){
    const frameScore =(this.state.frames[f]+this.state.frames[nextThrowName])%8
    score+=frameScore

    if(throwScore===7 && nextThrowScore===0 && currentFrame<10){
     
        const nextFrameScore=(this.state.frames['f'+nextFrame+'t1']+this.state.frames['f'+nextFrame+'t2'])%8
        score+=(2*nextFrameScore)
    }

if(throwScore!==7 && (throwScore+nextThrowScore)===7 && currentFrame<10){
    const nextThrowScore=this.state.frames['f'+nextFrame+'t1']%8
    score+=nextThrowScore
}
    
  
currentFrame++
}


    
    
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