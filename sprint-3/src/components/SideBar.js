import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <div className="sidebar">
            <h5>NEXT VIDEO</h5>
            {
                props.sideVideos
                .filter(sideVideo => sideVideo.id !== props.mainVideo.id)
                .map(sideVideo => 
                    <SideVideo key={sideVideo.id} sideVideoObject={sideVideo}/>        
                )    
            }
        </div>
    )
}

function SideVideo(props) {
    return (
        <Link className="link" to={"/videos/" + props.sideVideoObject.id}>
            <div className="sidebar__video">
                <img src={props.sideVideoObject.image} alt="thumbnail"></img>
                <div className="sidebar__video--info">
                    <h3>{props.sideVideoObject.title}</h3>
                    <h4>{props.sideVideoObject.channel}</h4>
                </div>
            </div>
        </Link>
    )
}

export default SideBar;