import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStory } from '../../store/actions/screenActions';

class Stories extends Component {
    handleDelete = (e) => {
        this.props.deleteStory(e.target.dataset.id)
    }
    handleEdit = (e) => {
        let id = e.target.dataset.id;
        this.props.history.push('/update/story/'+id)
    }
    render() {
        
        let { stories } = this.props;
        // console.log(stories);
        let storyList = stories.map(story => {
            
            return (
                
                <div className="w3-card-4 w3-padding w3-margin-bottom my-relative " style={{backgroundColor: story.color}}   key={story.id}>
                    <h5 className="w3-center"><b>{story.heading}</b> </h5> 
                    <div className="my-position"><i className="fa fa-edit w3-margin-right" data-id={story.id}  onClick={this.handleEdit}></i>  <i className="fa fa-trash w3-margin-right" onClick={this.handleDelete} data-id={story.id}></i></div>
                    <p>{story.body}</p>
                </div>
            )
        });
        

        return (
            <div className="w3-quarter w3-padding w3-border-top ">
                <h4 className="w3-bottombar w3-border-blue w3-center"><b>Stories</b></h4> 
                {storyList}
            </div>
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
        deleteStory: (id) => dispatch(deleteStory(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stories)
