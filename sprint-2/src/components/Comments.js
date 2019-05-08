import React from 'react';
import profileImage from '../assets/Images/Mohan-muruge.jpg'





class Comments extends React.Component {

    sortComments = (commentArray) => {
        let sortedArray = commentArray;
        sortedArray.sort((a, b) => {
            return b.timestamp - a.timestamp;
        })
        console.log(sortedArray);
        return sortedArray;
    }

    
        
    render() {

        

        return (
            <div className="comments">

                <h3 className="comments__counter">{this.props.mainVideo.comments.length} Comments</h3>
                <h5>JOIN THE CONVERSATION</h5>
                <div className="comments__submitter">

                    <div className="profilepic__container">
                        <img src={profileImage} alt="Profile"></img>
                    </div>

                    <form id="commentForm" className="comments__form--container" onSubmit={this.props.postComment}>
                        <textarea type="text" name="commentBox" placeholder="Add a comment"></textarea>
                        <button type="submit" form="commentForm" >
                            COMMENT
                        </button>
                    </form>

                </div>
                <div className="divider"></div>
                <div className="comments__posted">
                {
                    
                    this.sortComments(this.props.mainVideo.comments).map(comment => 
                        <Comment commentObject ={comment} key={comment.id} dateConvert={this.props.dateConvert} userName={this.props.userName} deleteComment={this.props.deleteComment} />
                    )   
                }
                </div>
            </div>
    )
    }

    
}

function Comment(props) {
    let deleteButton = '';
    if (props.userName === props.commentObject.name) {
        deleteButton = 'delete'
    }

    return (
        <>
            <div>
                <div className="comments__comment--container">
                    <div className="profilepic__gray"></div>

                    <div className="comments__comment--body">
                        <h3>{props.commentObject.name}</h3>
                        <h5>{props.dateConvert(props.commentObject.timestamp)}</h5>
                        <h4>{props.commentObject.comment}</h4>
                        <button className="comments__delete" id={props.commentObject.id} onClick={props.deleteComment}>{deleteButton}</button>
                    </div>
                    
                </div>
                
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Comments;