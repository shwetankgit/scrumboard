import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../store/actions/screenActions';

class NotStarted extends Component {
    handleDelete = (e) => {
        this.props.deleteTask(e.target.dataset.id)
    }
    handleEdit = (e) => {
        let id = e.target.dataset.id;
        this.props.history.push('/update/task/'+id+"&NOT_STARTED")
    }
    render() {
        let { notStarted } = this.props;
        // console.log(notStarted);
        let notStartedList = notStarted.map(task => {
            return (
                <div className="w3-panel w3-leftbar my-relative " style={{backgroundColor : task.color}} key={task.id}>
                    <div className="my-position"><i className="fa fa-edit w3-margin-right"  data-id={task.id}  onClick={this.handleEdit}></i>  <i className="fa fa-trash w3-margin-right" onClick={this.handleDelete} data-id={task.id}></i></div>
                    <p>{task.taskData}</p>
                </div>
            )
        });
        

        return (
            <div className="w3-quarter w3-padding w3-border-top ">
                <h4 className="w3-bottombar w3-border-red w3-center"><b>Not Started</b></h4>  
                {notStartedList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        notStarted: state.notStarted.notStartedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask('DELETE_TASK_NOT_STARTED',id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotStarted)
