import React, { Component } from 'react'
import UpdateStory from '../elements/UpdateStory';
import UpdateTask from '../elements/UpdateTask';

export class Update extends Component {

    render() {
        let displayForm;
     
        switch (this.props.match.params.updateFor){
            case 'story':
                displayForm = <UpdateStory storyId={this.props.match.params.id} history={this.props.history}/>;
                break;
            case 'task':
                let data = this.props.match.params.id.split('&');
                displayForm = <UpdateTask taskId={data[0]} taskStatus={data[1]} history={this.props.history}/>;
                break;
            default:
                displayForm = 'Something Went wrong!...';
                break;
        }
        return (
            <div className='my-container'>
            <header className="w3-container w3-padding">
            <div className="w3-card-2 w3-white w3-round-large w3-center w3-padding ">
                <h4><b>Update for {this.props.match.params.updateFor.toUpperCase()}</b></h4>
            </div>      
            </header>
            {displayForm}
            </div>
        )
    }
}

export default Update
