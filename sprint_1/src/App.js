import React from 'react';
import logo from './assets/Logo/Logo-brainflix.svg'
import uploadIcon from './assets/Icons/SVG/Icon-upload.svg'
import profileImage from './assets/Images/Mohan-muruge.jpg'
import playingVideo from './assets/Video/BrainStation Sample Video.mp4'
import videoThumbnail from './assets/Images/video-list-0.jpg'
import playIcon from './assets/Icons/SVG/Icon-play.svg'
import fullscreenIcon from './assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from './assets/Icons/SVG/Icon-volume.svg'
import scrubber from './assets/Icons/SVG/Icon-scrubber-control.svg'
import './App.css';


function App() {
  return (
    <div>
      <Header profilePic={profileImage} />
      <div className="video__container">
        <video className="video__current" poster={videoThumbnail}>
          <source src={playingVideo} type="video/mp4"></source>
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
    </div>
    

  );
}

function Header(props) {
  return (
    <header>
      <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
      <form id="searchForm" className="header__search">
        <input type="text" name="searchBox" placeholder="Search"></input>
        <button type="submit" form="searchForm"></button>

      </form>
      <div className="header__upload--container">
        <button className="header__upload--button">
          <img src={uploadIcon} alt="Upload Button Icon"></img>
          UPLOAD
        </button>
        <div className="profilepic__container">
          <img src={props.profilePic} alt="Profile"></img>
        </div>
      </div>
    </header>
  )
  
  
}

export default App;
