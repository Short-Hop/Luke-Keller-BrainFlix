import React from 'react';
import Comments from '../components/Comments';

// Container - mainly a placeholder for potential future required state changes
class CommentContainer extends React.Component {

    sortComments = (commentArray) => {
        let sortedArray = commentArray;
        sortedArray.sort((a, b) => {
            return b.timestamp - a.timestamp;
        })
        return sortedArray;
    }

    render() {
        return (
            <Comments sortComments={this.sortComments} mainVideo={this.props.mainVideo} postComment={this.props.postComment} deleteComment={this.props.deleteComment} userName={this.props.userName} />
        )
    }

}

export default CommentContainer;