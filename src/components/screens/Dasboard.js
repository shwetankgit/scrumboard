import React, { Component } from 'react'
import Stories from "../elements/Stories";
import NotStarted from '../elements/NotStarted';
import InProgress from "../elements/InProgress";
import Done from '../elements/Done'

class Dasboard extends Component {
    render() {
        return (
            <div className="w3-row w3-container w3-white">
                <Stories history={this.props.history}/>
                <NotStarted history={this.props.history}/>
                <InProgress history={this.props.history}/>
                <Done history={this.props.history}/>
            </div>
        )
    }
}



export default Dasboard
