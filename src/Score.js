import React, { Component } from 'react';

import ScoreTable from './ScoreTable'

class Score extends Component {

    constructor(props) {
        super(props)
        let styles = {
            color: this.props.playerNumber % 2 === 1 ? 'white' : 'black',
            backgroundColor: this.props.playerNumber % 2 === 1 ? 'blue' : 'grey'
        }

        this.state = {
            score: 0,
            frames: {
                f1t1: 0, f1t2: 0, f2t1: 0, f2t2: 0, f3t1: 0, f3t2: 0,
                f4t1: 0, f4t2: 0, f5t1: 0, f5t2: 0, f6t1: 0, f6t2: 0,
                f7t1: 0, f7t2: 0, f8t1: 0, f8t2: 0, f9t1: 0, f9t2: 0,
                f10t1: 0, f10t2: 0, f10t3: 0,
            },
            playerName: ' ',
            renderNameForm: true,
            styles
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


            const nextFrame = (currentFrame + 1).toString()

            if (f.slice(3).includes('1')) {

                if (this.state.frames[f] + this.state.frames[nextThrowName] > 10)
                    alert('You could only have hit a total of 10 pins!!')

                const frameScore = (this.state.frames[f] + this.state.frames[nextThrowName]) % 8
                score += frameScore

                switch (currentFrame) {
                    case 6:
                        if (this.state.frames['f6t1'] || this.state.frames['f6t2'])
                            score -= ((score) % currentFrame)
                        break;
                    case 7:
                        if (this.state.frames['f7t1'] || this.state.frames['f7t2'])
                            score -= ((score) % currentFrame)
                        break;
                    case 8:
                        if (this.state.frames['f8t1'] || this.state.frames['f8t2'])
                            score -= ((score) % currentFrame)
                        break;
                    case 9:
                        if (this.state.frames['f9t1'] || this.state.frames['f9t2'])
                            score -= ((score) % currentFrame)
                        break;
                    case 10:
                        if (this.state.frames['f10t1'] || this.state.frames['f10t2'])
                            score -= ((score) % currentFrame)
                        break;
                    default:
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
            return null;
        })
        this.setState({ score })
    }

    handleNameChange = (ev) => {
        this.setState({ playerName: ev.target.value })
    }

    handleNameSubmit = (ev) => {
        ev.preventDefault()
        this.setState({ renderNameForm: false })
    }

    render() {
        return (
            <div className="About" style={this.state.styles}>
                <center>
                    {this.state.renderNameForm
                        ?
                        <div>
                            <h2>Player {this.props.playerNumber}</h2>
                            <form onSubmit={this.handleNameSubmit}>
                                <input 
                                    type="text" 
                                    label="Player Name"
                                    value={this.state.playerName}
                                    onChange={this.handleNameChange}
                                    placeholder='Enter Player Name...' 
                                />
                            </form>
                        </div>
                        :
                        <h2>{this.state.playerName}</h2>
                    }

                    <ScoreTable score={this.state.score} handleChange={this.handleChange} frames={this.state.frames} />

                    <br />
                </center>
            </div>
        );

    }

}


export default Score;