import React from 'react';
import playIcon from '../assets/Icons/SVG/Icon-play.svg'
import fullscreenIcon from '../assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from '../assets/Icons/SVG/Icon-volume.svg'

function Video(props) {
    return (
        <div className="video__container">
            <video className="video__current" poster={props.mainVideo.image}>
                <source src={props.mainVideo.video} type="video/mp4"></source>
            </video>
            <div className="video__controls">

                <div className="video__controls--container">
                    <button>
                        <img src={playIcon} alt="Play Button"></img>
                    </button>
                </div>

                <div className="video__controls--container">
                    <button>
                        <div className="video__controls--bar"></div>
                    </button>
                    <p>0:00 / 0:{props.mainVideo.duration}</p>
                </div>

                <div className="video__controls--container">
                    <button>
                        <img src={fullscreenIcon} alt="Fullscreen Button"></img>
                    </button>
                    <button>
                        <img src={volumeIcon} alt="Volume Button"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Video