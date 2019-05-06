import React from 'react';
import profileImage from '../assets/Images/Mohan-muruge.jpg'





class Comments extends React.Component {
        
    render() {
        return (
            <div className="comments">

                <h3 className="comments__counter">3 Comments</h3>
                <h5>JOIN THE CONVERSATION</h5>
                <div className="comments__submitter">

                    <div className="profilepic__container">
                        <img src={profileImage} alt="Profile"></img>
                    </div>

                    <form id="commentForm" className="comments__form--container">
                        <textarea type="text" name="commentBox" placeholder="Add a comment"></textarea>
                        <button type="submit" form="commentForm">
                            COMMENT
                        </button>
                    </form>

                </div>
                <div className="divider"></div>
                <div className="comments__posted">
                {
                    this.props.mainVideo.comments.map((comment, i) => 
                        <Comment commentObject ={comment} key={i} dateConvert={this.props.dateConvert} />
                    )   
                }
                </div>
            </div>
    )
    }

    
}

function Comment(props) {
    return (
        <>
            <div>
                <div className="comments__comment--container">
                    <div className="profilepic__gray"></div>

                    <div className="comments__comment--body">
                        <h3>{props.commentObject.name}</h3>
                        <h5>{props.dateConvert(props.commentObject.timestamp)}</h5>
                        <h4>{props.commentObject.comment}</h4>
                    </div>

                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Comments;