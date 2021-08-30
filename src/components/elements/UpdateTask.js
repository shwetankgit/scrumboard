import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateTask } from '../../store/actions/screenActions';

class UpdateTask extends Component {
    constructor(props){
        super(props);
        let task = this.getTask(this.props.taskId, this.props.taskStatus);

        this.state = {
            data:{
                id: this.props.taskId,
                taskData: task.taskData,
                color: task.color,
                forStoryId: task.forStoryId
            },
            prevStatus: this.props.taskStatus,
            currentStatus: this.props.taskStatus,
            
        }

    }

    getTask = (id,status) => {
        
       let task
       switch (status){
            case 'NOT_STARTED':
                task = this.props.notStarted.filter(t => {
                    return t.id === id
                })
                return task[0]
            case 'IN_PROGRESS':
                task = this.props.inProgress.filter(t => {
                    return t.id === id
                })
                return task[0]
            case 'DONE':
                task = this.props.done.filter(t => {
                    return t.id === id
                })
                return task[0]
            default:
                return ''
        

       }
        
    }
    
    handleStatus = (e) => {
        // console.log(e.target.value)
        this.setState({
            ...this.state,
            currentStatus: e.target.value
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

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props)
        this.props.updateTask(this.state)
        this.props.history.push('/')

    }

    render() {
        // console.log(this.state)
        return (
            <form id="updateTaskForm" className="w3-container w3-padding " onSubmit={this.handleSubmit}>
        
                <div className="w3-container w3-card-2 w3-white w3-round-large">
                    {/* <div className="w3-row w3-padding ">
                        <div className="w3-half ">
                            <h5><b>For Story</b></h5>
                        </div>
                        <div className="w3-half w3-center">
                            <input className="w3-select w3-light-grey w3-padding w3-border-0 my-select" name="story" disabled/>
                               
                            
                        </div>
                    </div> */}
                    <div className="w3-padding " onChange={this.handleStatus} >
                        <h5><b>Task Status</b></h5>
                        <p>
                        <input className="w3-radio" type="radio" name="status" value="NOT_STARTED" defaultChecked={this.state.currentStatus === 'NOT_STARTED'}/>
                        <label> Not Started</label></p>
                        <p>
                        <input className="w3-radio" type="radio" name="status" value="IN_PROGRESS" defaultChecked={this.state.currentStatus === 'IN_PROGRESS'}/>
                        <label> In Progress</label></p>
                        <div>
                        <input className="w3-radio" type="radio" name="status" value="DONE" defaultChecked={this.state.currentStatus === 'DONE'}/>
                        <label> Done</label></div>
                    </div>   
                
                    <div className="w3-padding ">
                    <label><h5><b>Task Detail</b></h5></label>
                    <input className="w3-input w3-border" type="text" name='task' placeholder="Enter the task Detail" required value={this.state.data.taskData} onChange={this.handleTask}/>
                    </div>
              
                    
                    <div className="w3-padding w3-margin-bottom w3-right">
                    
                    <button className="w3-button w3-green "> Update </button>
                </div>
                </div>
          
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       notStarted: state.notStarted.notStartedList,
       inProgress: state.inProgress.inProgressList,
       done: state.done.doneList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (data) => dispatch(updateTask(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateTask)
