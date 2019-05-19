import React from 'react';
import Header from './components/Header';
import profileImage from './assets/Images/Mohan-muruge.jpg';
import UploadForm from './components/UploadForm'
import thumbnail from "./assets/Images/Upload-video-preview.jpg"
import axios from 'axios';

class UploadPage extends React.Component {
    postVideo = (event) => {
        event.preventDefault();
        let postURL = 'http://localhost:8080/videos'

        let newVideo = {
            channel: 'Mohan Muruge',
            title: event.target.videoTitle.value,
            description: event.target.videoDescription.value,
            image: thumbnail,
        }   

        axios.post(postURL, newVideo).then(response => {
            console.log(response);
        })

    }
    

    render() {
        return (
            <div>
                <Header profilePic={profileImage} />
                <UploadForm postVideo={this.postVideo} />
            </div>
        )
    }
}

export default UploadPage;
