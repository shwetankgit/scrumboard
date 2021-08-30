import React, { Component } from 'react'

import AddStory from '../elements/AddStory';
import AddTask from '../elements/AddTask';

export class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            addForm: this.props.match.params.addFor,

        }

    }

    handleAddForm = (e) => {
        this.props.history.push('/add/'+ e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            // console.log('In component did update',this.props.match.params.addFor)
            this.setState({
                ...this.state,
                addForm: this.props.match.params.addFor
            })
        }
    }


    render() {
        let displayForm
        // console.log(this.state.addForm)
        switch (this.state.addForm){
            case 'story':
                displayForm = <AddStory history={this.props.history}/>;
                break;
            case 'task':
                displayForm = <AddTask history={this.props.history}/>;
                break;
            default:
                displayForm = 'Something Went wrong!...';
                break;
        }
        return (
            <div className='my-container'>
            <header className="w3-container w3-padding">
            <div className="w3-card-2 w3-white w3-round-large w3-center ">
                <div className="w3-row w3-padding ">
                    <div className="w3-half ">
                        <h4><b>Add Entry for</b></h4>
                    </div>
                    <div className="w3-half">
                        <select value={this.state.addForm} className="w3-select w3-light-grey w3-padding w3-border-0 my-select" name="addForm" onChange={this.handleAddForm} >
                            <option value="" disabled>Choose your option</option>
                            <option value="story" >Story</option>
                            <option value="task" >Task</option>
                           
                        </select>
                        
                    </div>
                </div>            
            </div>
            </header>
            {displayForm}
            </div>
           

            
            
        )
    }
}



export default Add
