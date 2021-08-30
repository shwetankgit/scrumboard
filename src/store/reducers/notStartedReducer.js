const initState = {
    notStartedList:[

        {   id:'1',
            taskData: 'This is task 1 data for story1',
            color: '#FFC133',
            forStoryId: '1',

        },
        {   id: '2',
            taskData: 'This is task 2 data for story1',
            color: '#FFC133',
            forStoryId: '1',
        },
        {   id: '3',
            taskData: 'This is task 1 data for story2',
            color: '#50F1BE',
            forStoryId: '2',
        },
        {   id: '4',
            taskData: 'This is task 2 data for story2',
            color: '#50F1BE',
            forStoryId: '2',
        },
        {   id: '5',
            taskData: 'This is task 2 data for story3',
            color: '#FAB89D',
            forStoryId: '3',
        }, 
        
    ],

}

const notStartedReducer = (state = initState, action) => {
    let { data } = action
    let newList
    switch (action.type) {
        case 'ADD_TASK_NOT_STARTED':
            let id = 'id'+ Math.random()*100;
            data.id = id;
            state.notStartedList.push(data);
            return state
        case 'ADD_OLD_TASK_NOT_STARTED':
            state.notStartedList.push(data);
            return state
        case 'UPDATE_TASK_NOT_STARTED':
            console.log('In Update of NOT Started',data.id)
            let filterList = state.notStartedList.filter(listdata => {
                return listdata.id !== data.id 
            })
            let task = state.notStartedList.filter(listdata => {
                return listdata.id === data.id 
            })
            
            task[0].taskData = data.taskData
            filterList.push(...task)
           
           
            // console.log(filterList)
            return {
                ...state,
                notStartedList: filterList
            }
        case 'DELETE_TASK_NOT_STARTED':
            newList = state.notStartedList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.id !== data 
            })
            // console.log(newList)
            return {
                ...state,
                notStartedList: newList
            }
        case 'DELETE_TASKS_NOT_STARTED_FOR_STORY':
            newList = state.notStartedList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.forStoryId !== data 
            })
            return {
                ...state,
                notStartedList: newList
            }
        default:
            return state
    }
  
   
}

export default notStartedReducer