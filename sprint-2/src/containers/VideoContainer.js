import React from 'react';
import Video from '../components/Video';


class VideoContainer extends React.Component {

    render() {
        return (
            <Video mainVideo={this.props.mainVideo} />
        )
    }
}

export default VideoContainer;