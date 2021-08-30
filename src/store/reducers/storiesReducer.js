const initState = {
    storyList:[
        {
            id: '1',
            heading: 'story 1 Heading',
            body: 'Story 1 Body',
            color: '#FFC133',
            
        },
        {
            id: '2',
            heading: 'story 2 Heading',
            body: 'Story 2 Body',
            color: '#50F1BE',
            
        },
        {
            id: '3',
            heading: 'story 3 Heading',
            body: 'Story 3 Body',
            color: '#FAB89D ',
        
        },
     
    ]

}

const storiesReducer = (state = initState, action) => {
    let { data } = action
    switch (action.type) {
        case 'ADD_STORY':
            // console.log("ADD story")
            let id = 'id'+ Math.random()*100;
            data.id = id;
            state.storyList.push(data);
            return state
        case 'UPDATE_STORY':
            let filterList = state.storyList.filter(listdata => {
                return listdata.id !== data.id 
            })
            let story = state.storyList.filter(listdata => {
                return listdata.id === data.id 
            })
            
            story[0].heading = data.heading
            story[0].body = data.body
            filterList.push(...story)
            
            
            // console.log(filterList)
            return {
                ...state,
                storyList: filterList
            }
        case 'DELETE_STORY':
            let newList = state.storyList.filter(listdata => {
                // console.log(listdata.id, data)
                return listdata.id !== data 
            })
            // console.log(newList)
            return {
                ...state,
                storyList: newList
            }
        default:
            return state
    }
  
   
}

export default storiesReducer
