const initState = {
    doneList:[

        {   id:'7',
            taskData: 'This is task 1 data for story1',
            color: '#FFC133',
            forStoryId: '1',

        },
        {   id: '8',
            taskData: 'This is task 1 data for story2',
            color: '#50F1BE',
            forStoryId: '2',
        },
        {   id: '9',
            taskData: 'This is task 2 data for story2',
            color: '#50F1BE',
            forStoryId: '2',
        },
        {   id: '10',
            taskData: 'This is task 2 data for story3',
            color: '#FAB89D',
            forStoryId: '3',
        }, 
        
    ],

}

const doneReducer = (state = initState, action) => {
    let { data } = action
    let newList
    // console.log('In reducer',data, action.type)
    switch (action.type) {
        case 'ADD_TASK_DONE':
            let id = 'id'+ Math.random()*100;
            data.id = id;
            state.doneList.push(data);
            return state
        case 'ADD_OLD_TASK_DONE':
            state.doneList.push(data);
            return state
        case 'UPDATE_TASK_DONE':
            
            let filterList = state.doneList.filter(listdata => {
                return listdata.id !== data.id 
            })
            let task = state.doneList.filter(listdata => {
                return listdata.id === data.id 
            })
            
            task[0].taskData = data.taskData
            filterList.push(...task)
            
            
            // console.log(filterList)
            return {
                ...state,
                doneList: filterList
            }
        case 'DELETE_TASK_DONE':
            // filter the state with new state 
            newList = state.doneList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.id !== data 
            })
            // console.log(newList)
            return {
                ...state,
                doneList: newList
            }
        case 'DELETE_TASKS_DONE_FOR_STORY':
            newList = state.doneList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.forStoryId !== data 
            })
            return {
                ...state,
                doneList: newList
            }
        default:
            return state
    }
  
   
}

export default doneReducer