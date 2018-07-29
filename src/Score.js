import React, { Component } from 'react';

class Score extends Component {

    constructor() {
        super()
        this.state = {
            score: 0,
            frames: {
                f1t1: 0, f1t2: 0, f2t1: 0, f2t2: 0, f3t1: 0, f3t2: 0,
                f4t1: 0, f4t2: 0, f5t1: null, f5t2: null, f6t1: null, f6t2: null,
                f7t1: null, f7t2: null, f8t1: null, f8t2: null, f9t1: null, f9t2: null,
                f10t1: null, f10t2: null, f10t3: null,
            },
            playerName: null,
            renderNameForm: true
        }
    }

    handleChange = (ev) => {
        const tempFrames = { ...this.state.frames }
        const frameName = ev.target.name
        tempFrames[frameName] = Number(ev.target.value)
        this.setState({ frames: tempFrames }, this.updateScore)

    }

    updateScore = () => {

        let score = 0
        let currentFrame = 1
        Object.keys(this.state.frames).map((f) => {
            const throwScore = this.state.frames[f] % 8

            let nextThrowName = ''
            if (currentFrame < 10) {
                nextThrowName = f.slice(0, 3) + '2'
            }
            else { nextThrowName = f.slice(0, 4) + '2' }

            const nextThrowScore = this.state.frames[nextThrowName] % 8

            if(throwScore+nextThrowScore>10)
            alert('You could only have hit a total of 10 pins!!')

            const nextFrame = (currentFrame + 1).toString()

            if (f.slice(3).includes('1')) {
                const frameScore = (this.state.frames[f] + this.state.frames[nextThrowName]) % 8
                score += frameScore

                if (currentFrame === 5) {
                    if(this.state.frames['f5t1']||this.state.frames['f5t2'])
                    score -= ((score) % currentFrame)
                }

                if (currentFrame === 6) {
                    if(this.state.frames['f6t1']||this.state.frames['f6t2'])
                    score -= ((score) % currentFrame)
                }

                if (currentFrame === 7) {
                    if(this.state.frames['f7t1']||this.state.frames['f7t2'])
                    score -= ((score) % currentFrame)
                }

                if (currentFrame === 8) {
                    if(this.state.frames['f8t1']||this.state.frames['f8t2'])
                    score -= ((score) % currentFrame)
                }

                if (currentFrame === 9) {
                    if(this.state.frames['f9t1']||this.state.frames['f9t2'])
                    score -= ((score) % currentFrame)
                }

                if (currentFrame === 10) {
                    if(this.state.frames['f10t1']||this.state.frames['f10t2'])
                    score -= ((score) % currentFrame)
                }

                if (throwScore === 7 && nextThrowScore === 0 && currentFrame < 10) {
                    const nextFrameScore = (this.state.frames['f' + nextFrame + 't1'] + this.state.frames['f' + nextFrame + 't2']) % 8
                    score += (nextFrameScore)
                }

                if (throwScore !== 7 && (throwScore + nextThrowScore) === 7 && currentFrame < 10) {
                    const nextThrowScore = this.state.frames['f' + nextFrame + 't1'] % 8
                    score += nextThrowScore
                }

                currentFrame++
            }

        })
        this.setState({ score })
    }

    handleNameChange =(ev)=>{
        this.setState({playerName: ev.target.value})
    }

    handleNameSubmit =(ev)=>{
        ev.preventDefault()
        this.setState({renderNameForm: false})
    }

    render() {
        if(this.state.renderNameForm){
        return (
            <div className="About">
                <center>
                    <form>
                        <h2>Player {this.props.playerNumber}</h2>
                        <form onSubmit={this.handleNameSubmit}>
                        <input type="text" label="Player Name" 
                        value={this.state.playerName}
                        onChange={this.handleNameChange}/>
                        </form>
                        <table width="50%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                            <tr>
                                <th className="frameTitle" colSpan='2'>1</th>
                                <th className="frameTitle" colSpan='2'>2</th>
                                <th className="frameTitle" colSpan='2'>3</th>
                                <th className="frameTitle" colSpan='2'>4</th>
                                <th className="frameTitle" colSpan='2'>5</th>
                                <th className="frameTitle" colSpan='2'>6</th>
                                <th className="frameTitle" colSpan='2'>7</th>
                                <th className="frameTitle" colSpan='2'>8</th>
                                <th className="frameTitle" colSpan='2'>9</th>
                                <th className="frameTitle" colSpan='3'>10</th>
                                <th colSpan="3" rowSpan="2"> </th>
                                <th className="score" colSpan="3" rowSpan="2">{this.state.score}</th>
                            </tr>
                            <tr>
                                <td colSpan='1'>
                                    <input name="f1t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f1t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f2t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f2t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>

                                    <input name="f3t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f3t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f4t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f4t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f5t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f5t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f6t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f6t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f7t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f7t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f8t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f8t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f9t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f9t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f10t1" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f10t2" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>
                                <td colSpan='1'>
                                    <input name="f10t3" type="number"
                                        onChange={this.handleChange}
                                        value={this.state.frames.name} />
                                </td>

                            </tr>
                            </tbody>
                        </table>

                    </form>

                    

                    <br />

                </center>
            </div>

        );}
        else{
            return (
                <div className="About">
                    <center>
                        <form>
                            <h2>{this.state.playerName}</h2>
                            <table width="50%" border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr>
                                    <th className="frameTitle" colSpan='2'>1</th>
                                    <th className="frameTitle" colSpan='2'>2</th>
                                    <th className="frameTitle" colSpan='2'>3</th>
                                    <th className="frameTitle" colSpan='2'>4</th>
                                    <th className="frameTitle" colSpan='2'>5</th>
                                    <th className="frameTitle" colSpan='2'>6</th>
                                    <th className="frameTitle" colSpan='2'>7</th>
                                    <th className="frameTitle" colSpan='2'>8</th>
                                    <th className="frameTitle" colSpan='2'>9</th>
                                    <th className="frameTitle" colSpan='3'>10</th>
                                    <th colSpan="3" rowSpan="2"> </th>
                                    <th className="score" colSpan="3" rowSpan="2">{this.state.score}</th>
                                </tr>
                                <tr>
                                    <td colSpan='1'>
                                        <input name="f1t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f1t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f2t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f2t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
    
                                        <input name="f3t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f3t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f4t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f4t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f5t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f5t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f6t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f6t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f7t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f7t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f8t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f8t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f9t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f9t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f10t1" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f10t2" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
                                    <td colSpan='1'>
                                        <input name="f10t3" type="number"
                                            onChange={this.handleChange}
                                            value={this.state.frames.name} />
                                    </td>
    
                                </tr>
                                </tbody>
                            </table>
    
                        </form>
    
                        
    
                        <br />
    
                    </center>
                </div>
    
            );
        }
    }


}






export default Score;