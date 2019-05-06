import React from 'react';

class SideBar extends React.Component {

    render() {
        return (
            <div className="sidebar">
                <h5>NEXT VIDEO</h5>
                {
                    this.props.sideVideos
                    .filter(sideVideo => sideVideo.id !== this.props.currentVideoId)
                    .map((sideVideo, i) => 
                        <SideVideo key={i} sideVideoObject={sideVideo}/>        
                    )    
                }
            </div>
        )
    }
}

function SideVideo(props) {
    return (
        <div className="sidebar__video">
            <img src={props.sideVideoObject.image} alt="thumbnail"></img>
            <div className="sidebar__video--info">
                <h3>{props.sideVideoObject.title}</h3>
                <h4>{props.sideVideoObject.channel}</h4>
            </div>
        </div>
    )
}

export default SideBar;