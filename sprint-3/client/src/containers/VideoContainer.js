import React from 'react';
import Video from '../components/Video';

// Container - mainly a placeholder for potential future required state changes
class VideoContainer extends React.Component {
    render() {
        return (
            <Video mainVideo={this.props.mainVideo} videoKey={this.props.videoKey}/>
        )
    }
}

export default VideoContainer;