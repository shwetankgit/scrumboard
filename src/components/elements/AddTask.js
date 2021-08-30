import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../store/actions/screenActions';

class AddTask extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {
                forStoryId: this.props.stories[0].id ? this.props.stories[0].id : '',
                color : this.props.stories[0].color ? this.props.stories[0].color : '',
                taskData: '',
            },
            status: 'ADD_TASK_NOT_STARTED' ,
            

        }

    }

    handleChange = (e) => {
        let selectedIndex = e.target.options.selectedIndex;
        let color = e.target.options[selectedIndex].getAttribute('data-color')
        this.setState({
                        ...this.state,
                        data: {
                            ...this.state.data,
                            forStoryId: e.target.value,
                            color: color
                        }
        });
    }
    handleTask = (e) => {
        this.setState({
                        ...this.state,
                        data:{
                            ...this.state.data,
                            taskData: e.target.value
                        }
        });
    }
    handleStatus = (e) => {
        // console.log(e.target.value)
        this.setState({
            ...this.state,
            status: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.status,this.state.data);
        this.props.history.push('/')
    }

    render() {
        // console.log(this.state)
        let { stories } = this.props
        let options = stories.map(story => {
            return (
                <option value={story.id} key={story.id} data-color={story.color}>{story.heading}</option>
            )
        })
        return (
            <form id="addTaskForm" className="w3-container w3-padding " onSubmit={this.handleSubmit}>
        
                <div className="w3-container w3-card-2 w3-white w3-round-large">
                    <div className="w3-row w3-padding ">
                        <div className="w3-half ">
                            <h5><b>For Story</b></h5>
                        </div>
                        <div className="w3-half w3-center">
                            <select value={this.state.data.forStoryId} className="w3-select w3-light-grey w3-padding w3-border-0 my-select" name='story' onChange={this.handleChange} required >
                                <option value="" disabled>Choose your option</option>
                                {options}
                            
                            </select>
                            
                        </div>
                    </div>
                    <div className="w3-padding " onChange={this.handleStatus}>
                        <h5><b>Task Status</b></h5>
                        <p>
                        <input className="w3-radio" type="radio" name="status" value="ADD_TASK_NOT_STARTED" defaultChecked={this.state.status === 'ADD_TASK_NOT_STARTED'}/>
                        <label> Not Started</label></p>
                        <p>
                        <input className="w3-radio" type="radio" name="status" value="ADD_TASK_IN_PROGRESS" defaultChecked={this.state.status === 'ADD_TASK_IN_PROGRESS'}/>
                        <label> In Progress</label></p>
                        <div>
                        <input className="w3-radio" type="radio" name="status" value="ADD_TASK_DONE" defaultChecked={this.state.status === 'ADD_TASK_DONE'}/>
                        <label> Done</label></div>
                    </div>
                       
                
                    <div className="w3-padding ">
                    <label><h5><b>Task Detail</b></h5></label>
                    <input className="w3-input w3-border" type="text" name='task' placeholder="Enter the task Detail" required onChange={this.handleTask} value={this.state.data.taskData}/>
                    </div>
              
                    
                    <div className="w3-padding w3-margin-bottom w3-right">
                    
                    <button className="w3-button w3-green "> Submit </button>
                </div>
                </div>
          
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        stories: state.stories.storyList,
      

    }
}

const mapDispatchToPrpos = (dispatch) => {
    return {
        addTask: (addFor,data) => dispatch(addTask(addFor,data))
    }
}

export default connect(mapStateToProps,mapDispatchToPrpos)(AddTask)
