const initState = {
    inProgressList:[

        {   id:'5',
            taskData: 'This is task data for story2',
            color: '#50F1BE',
            forStoryId: '2',

        },
        {   id: '6',
            taskData: 'This is task data for story3',
            color: '#FAB89D',
            forStoryId: '3',
        },
 
        
    ],

}

const inProgressReducer = (state = initState, action) => {
    let { data } = action
    let newList
    switch (action.type) {
        case 'ADD_TASK_IN_PROGRESS':
            let id = 'id'+ Math.random()*100;
            data.id = id;
            state.inProgressList.push(data);
            return state
        case 'ADD_OLD_TASK_IN_PROGRESS':
            state.inProgressList.push(data);
            return state
        case 'UPDATE_TASK_IN_PROGRESS':
            console.log('In Update of NOT Started',data.id)
            let filterList = state.inProgressList.filter(listdata => {
                return listdata.id !== data.id 
            })
            let task = state.inProgressList.filter(listdata => {
                return listdata.id === data.id 
            })
            
            task[0].taskData = data.taskData
            filterList.push(...task)
            
            
            // console.log(filterList)
            return {
                ...state,
                inProgressList: filterList
            }
        case 'DELETE_TASK_IN_PROGRESS':
            newList = state.inProgressList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.id !== data 
            })
            return {
                ...state,
                inProgressList: newList
            }
        case 'DELETE_TASKS_IN_PROGRESS_FOR_STORY':
            newList = state.inProgressList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.forStoryId !== data 
            })
            return {
                ...state,
                inProgressList: newList
            }
        default:
            return state
    }
  
   
}

export default inProgressReducer