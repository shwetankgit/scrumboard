// Below are the different actions

export const deleteTask = (deleteFor,id) => {
    console.log(deleteFor)
    return (dispatch) => {
        // console.log(deleteFor,data)
        if(id){
        dispatch({type:deleteFor,data:id})
        }
     
    }
}

export const deleteStory = (id) => {
    console.log('DELETE_STORY')
    return (dispatch) => {
        // console.log(deleteFor,data)
        if(id){
        dispatch({type:"DELETE_STORY",data:id});
        dispatch({type:"DELETE_TASKS_NOT_STARTED_FOR_STORY",data:id});
        dispatch({type:"DELETE_TASKS_IN_PROGRESS_FOR_STORY",data:id});
        dispatch({type:"DELETE_TASKS_DONE_FOR_STORY",data:id});

        }
     
    }
}

export const addTask = (addFor,data) => {
    // console.log(addFor)
    return (dispatch) => {
        dispatch({type:addFor,data})
      
     
    }
}

export const addStory = (data) => {
    console.log('ADD_STORY')
    return (dispatch) => {
        dispatch({type:"ADD_STORY",data});
      
     
    }
}

export const updateTask = (x) => {
    console.log("Update Task")
    // console.log(x)
    let data
    return (dispatch) => {

        if(x.prevStatus !== x.currentStatus){
            data = x.data.id;
            dispatch({type:"DELETE_TASK_"+x.prevStatus,data});
            data = x.data;
            dispatch({type:"ADD_OLD_TASK_"+x.currentStatus,data});

        }else{
            data = x.data
            dispatch({type:"UPDATE_TASK_"+x.currentStatus,data}); 
        
        }

   
    }
}

export const updateStory = (data) => {
    console.log('UPDATE_STORY')
    return (dispatch) => {
        dispatch({type:"UPDATE_STORY",data});
      
     
    }
}