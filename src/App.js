import React, { Component } from 'react';
import {Route , Switch, Redirect} from 'react-router-dom'

import About from './About'
import ScoreSetup from './ScoreSetup'

class App extends Component {

render(){
    return(
        <Switch>
            
            <Route
            path='/about'
            component={About}
            />
            <Route
            path='/score'
            component={ScoreSetup}
            />
            <Route
            render={()=>{
                return(
                    <Redirect to='/about'/>
                )
            }}
            />
        </Switch>
    )
}

}

export default App