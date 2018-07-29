import React, { Component } from 'react';

import Score from './Score'

class ScoreSetup extends Component {

    constructor() {
        super()
        this.state = {
            number: 1,
            displayForm: true,
            arrayThing: []
        }
    }



    handleChange = (ev) => {
        this.setState({ number: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        let arrayThing = []
        for (let i = 0; i < this.state.number; i++)
            arrayThing.push(i)
        this.setState({ arrayThing })
        this.setState({ displayForm: false })
    }




    render() {
        if (this.state.displayForm) {
            return (
                < div>
                <center>
                         <h1>mod 8 bowling</h1>

                         <br />
                        <h2> How many players?</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input label="How many players?"
                        min="1"
                            type="number" onChange={this.handleChange}
                            value={this.state.number} />
                    </form>
                    </center>
                </div>
            )
        }
        else {
            return (
                <div>
                     <center>
                         <h1>mod 8 bowling</h1>
                    <p>
                        Enter in your score(s)
                    </p>
                    
                    {
                        this.state.arrayThing.map((thing) =>
                            <div  key={thing}>
                                <Score playerNumber={thing+1}/>
                            </div>)

                    }
                    </center>
                </div>
            )
        }
    }
}

export default ScoreSetup