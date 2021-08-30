import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateStory} from '../../store/actions/screenActions'

class UpdateStory extends Component {
    constructor(props){
        super(props)
        let story = this.getStory(this.props.storyId)
        this.state = {
            id: story.id,
            heading: story.heading,
            body: story.body,
            color: story.color,
        }
    }

    getStory = (id) => {
        let story = this.props.stories.filter(s => {
            return s.id === id
        })
        return story[0]

    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateStory(this.state);
        this.props.history.push('/')
    }


    render() {
       
        return (
            <form id="updateStoryForm" className="w3-container w3-padding " onSubmit={this.handleSubmit}>
        
            <div className="w3-container w3-card-2 w3-white w3-round-large">
          
               
                <div className="w3-padding ">
                <label><h5><b>Story Heading</b></h5></label>
                <input className="w3-input w3-border" type="text" name='heading' placeholder="Enter the title" required value={this.state.heading} onChange={this.handleChange}/>
                </div>
                <div className="w3-padding ">
                <label ><h5><b>Content</b></h5></label>
                <textarea className="w3-input w3-border" type="text" name='body' placeholder="Enter Something about the story... " required value={this.state.body} onChange={this.handleChange}/>
                
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
        stories: state.stories.storyList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStory: (data) => dispatch(updateStory(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateStory)
