import React from 'react';
import viewsIcon from '../assets/Icons/SVG/Icon-views.svg'
import likesIcon from '../assets/Icons/SVG/Icon-likes.svg'

function Info(props) {
    return (
        <div className="info">

            <h1 className="info__title">{props.mainVideo.title}</h1>

            <div className="info__subtitle">
                <h3>{props.mainVideo.channel}</h3>
                <h5>{props.dateConvert(props.mainVideo.timestamp)}</h5>
            </div>

            <div className="info__stats">
                <img src={viewsIcon} alt="Views"></img>
                <h4>{props.mainVideo.views}</h4>
                <img src={likesIcon} alt="Likes"></img>
                <h4>{props.mainVideo.likes}</h4>
            </div>

            <div className="divider"></div>

            <h4 className="info__description">{props.mainVideo.description}</h4>
        </div>
    )
}

export default Info