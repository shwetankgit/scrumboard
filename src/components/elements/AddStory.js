import React, { Component } from 'react'
import { addStory } from '../../store/actions/screenActions';
import { connect } from 'react-redux';


class AddStory extends Component {
    state ={
        heading:'',
        story: '',
        color: '#'+Math.floor(Math.random()*16777215).toString(16),

    }
    handleChange =(e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addStory(this.state);
        this.props.history.push('/');

    }
    render() {
            Math.floor(Math.random()*5)
        return (
            <form id="addStoryForm" className="w3-container w3-padding " onSubmit={this.handleSubmit}>
        
            <div className="w3-container w3-card-2 w3-white w3-round-large">
          
               
                <div className="w3-padding ">
                <label><h5><b>Story Heading</b></h5></label>
                <input value={this.state.heading} className="w3-input w3-border" type="text" name='heading' placeholder="Enter the title" required onChange={this.handleChange}/>
                </div>
                <div className="w3-padding ">
                <label ><h5><b>Content</b></h5></label>
                <textarea value={this.state.body} className="w3-input w3-border" type="text" name='body' placeholder="Enter Something about the story... " required onChange={this.handleChange}/>
                
                </div>
                
                <div className="w3-padding w3-margin-bottom w3-right">
                
                <button className="w3-button w3-green "> Submit </button>
               </div>
                </div>
          
            </form>
        )
    }
}


const mapDispatchToPrpos = (dispatch) => {
    return {
        addStory: (data) => dispatch(addStory(data))
    }
}

export default connect(null,mapDispatchToPrpos)(AddStory)
