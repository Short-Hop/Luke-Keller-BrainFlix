import React from 'react';
import thumbnail from "../assets/Images/Upload-video-preview.jpg"
import { Link } from 'react-router-dom';

function UploadForm(props) {
    return (
        <div className="upload">
            <h1>Upload Video</h1>
            <div className="upload__container">
                <div className="divider"></div>
                <div>
                    <div className="upload__thumbnail--container">
                        <h5>VIDEO THUMBNAIL</h5>
                        <img src={thumbnail} alt ="Thumbnail"></img>
                    </div>
                    <form className="upload__form" id ="uploadForm" onSubmit={props.postVideo}>
                    <h5>TITLE YOUR VIDEO </h5>
                        <input type="text" name="videoTitle" placeholder="Add a title to your video" ></input>
                        <h5>ADD A VIDEO DESCRIPTION</h5>
                        <textarea name="videoDescription" placeholder="Add a description of your video"></textarea>
                    </form>
                </div>
                
                <div className="divider"></div>
                <button type="submit" form="uploadForm">PUBLISH</button>
                <Link className="link" to='/'>CANCEL</Link>
            </div>
            
        </div>
    )
}

export default UploadForm;
