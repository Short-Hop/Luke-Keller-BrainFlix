import React from 'react';
import Header from './components/Header';
import profileImage from './assets/Images/Mohan-muruge.jpg';
import UploadForm from './components/UploadForm'

function UploadPage(props) {
    return (
        <div>
            <Header profilePic={profileImage}/>
            <UploadForm />
        </div>
    )
}

export default UploadPage;
