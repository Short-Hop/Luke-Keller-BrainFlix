import React from 'react';
import playIcon from '../assets/Icons/SVG/Icon-play.svg'
import pauseIcon from '../assets/Icons/SVG/Icon-pause.svg'
import fullscreenIcon from '../assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from '../assets/Icons/SVG/Icon-volume.svg'
import scrubberIcon from '../assets/Icons/SVG/Icon-scrubber-control.svg'

class Video extends React.Component {

    state = {
        icon: playIcon,
        progress: 0,
        seconds: 0,
        timeCode: '0:00'
    }

    playPause = () => {
        let video = this.refs.videoRef;
        if(video.paused) {
            video.play();
            this.setState({
                icon: pauseIcon
            })
        } else {
            video.pause();
            this.setState({
                icon: playIcon,
            })
        }
    }

    getSeconds = (duration) => {
        if (!duration) {
            return 0;
        }

        let minutes = parseInt(duration.substring(0, 2), 10);
        let seconds = 0;

        if (minutes <= 10) {
            seconds = parseInt(duration.substring(2), 10);
        } else {
            seconds = parseInt(duration.substring(3), 10);
        }
        seconds += minutes*60

        return seconds; 
    }

    updateTime = (event) => {
        if(event.target.duration > 0) {
            this.setState({
                progress: Math.floor((100 / event.target.duration) * event.target.currentTime),
                seconds: Math.floor(event.target.currentTime)
            })
        }
        this.printTime();
    }

    printTime = () => {
        let minutes = Math.floor(this.state.seconds / 60);
        let seconds = (this.state.seconds % 60);
        if(seconds < 10) {
            seconds = `0${seconds}`
        }
        this.setState({
            timeCode: `${minutes}:${seconds}`
        }) 
    }

    scrubberControl = (event) => {
        let video = this.refs.videoRef;
        video.pause();
        this.setState({
            icon: playIcon,
            progress: event.target.value
        })
        video.currentTime = ((event.target.value / 100) * video.duration)
    }

    scrubberUpdate = (event) => {
        console.log('time updated')
        event.target.value = this.state.progress;
    }

    render() {
        return (
            <div className="video__container">
                <video className="video__current" poster={this.props.mainVideo.image} ref="videoRef" src={this.props.mainVideo.video + this.props.videoKey} onTimeUpdate={this.updateTime} ></video>
                <div className="video__controls">

                    <div className="video__controls--container">
                        <button onClick={this.playPause} >
                            <img src={this.state.icon} alt="Play Button"></img>
                        </button>
                    </div>

                    <div className="video__controls--container">
                        <div>
                            <input type="range" min="0" max="100" onChange={this.scrubberControl} value={this.state.progress}></input>
                            <progress max={100} value={this.state.progress} ></progress>
                        </div>
                        
                        <p>{this.state.timeCode} / {this.props.mainVideo.duration}</p>
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
    
}

export default Video