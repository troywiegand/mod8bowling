import React, { Component } from 'react';

class ScoreTable extends Component {

    render(){
        return(
            <form>
                            <table >
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
                                        <th className="score" colSpan="3" rowSpan="2">{this.props.score}</th>
                                    </tr>
                                    <tr>
                                        <td colSpan='1'>
                                            <input name="f1t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f1t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f2t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f2t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>

                                            <input name="f3t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f3t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f4t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f4t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f5t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f5t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f6t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f6t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f7t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f7t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f8t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f8t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f9t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f9t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f10t1" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f10t2" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>
                                        <td colSpan='1'>
                                            <input name="f10t3" type="number"
                                                onChange={this.props.handleChange}
                                                value={this.props.frames.name} />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </form>

        )
    }


}

export default ScoreTable