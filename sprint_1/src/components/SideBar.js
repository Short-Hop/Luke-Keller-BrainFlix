import React from 'react';
import videoThumbnail from '../assets/Images/video-list-0.jpg'

let sideVideoComponets = [];


class SideBar extends React.Component {
    state = {
        sideVideoArray: this.props.sideVideos,
    }



    render() {

        return (
            <div className="sidebar">
                <h5>NEXT VIDEO</h5>
                {
                    this.state.sideVideoArray.map((sideVideo, i) =>

                        <SideVideo key={i} sideVideoObject={sideVideo}

                        />)
                }
            </div>
        )
    }
}

function SideVideo(props) {
    return (
        <div className="sidebar__video">
            <img src={videoThumbnail} alt="thumbnail"></img>
            <div className="sidebar__video--info">
                <h3>{props.sideVideoObject.title}</h3>
                <h4>{props.sideVideoObject.channel}</h4>
            </div>
        </div>
    )
}

export default SideBar;