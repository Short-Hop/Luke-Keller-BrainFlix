import React from 'react';
import logo from './assets/Logo/Logo-brainflix.svg'
import uploadIcon from './assets/Icons/SVG/Icon-upload.svg'
import profileImage from './assets/Images/Mohan-muruge.jpg'
import playingVideo from './assets/Video/BrainStation Sample Video.mp4'
import videoThumbnail from './assets/Images/video-list-0.jpg'
import playIcon from './assets/Icons/SVG/Icon-play.svg'
import fullscreenIcon from './assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from './assets/Icons/SVG/Icon-volume.svg'
import viewsIcon from './assets/Icons/SVG/Icon-views.svg'
import likesIcon from './assets/Icons/SVG/Icon-likes.svg'

import scrubber from './assets/Icons/SVG/Icon-scrubber-control.svg'
import './styles/styles.css';

let timeCode = "0:00 / 0:42"


function App() {
  return (
    <div>
      <Header profilePic={profileImage} />
      <Video thumbnail={videoThumbnail} videoSource={playingVideo} />
      <Info />
      <Comments />
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

function Video(props) {
  return (
    <div className="video__container">
      <video className="video__current" poster={props.thumbnail}>
        <source src={props.videoSource} type="video/mp4"></source>
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
          <p>{timeCode}</p>
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

function Info() {
  return (
    <div className="info">

      <h1 className="info__title">BMX Rampage: 2018 Highlights</h1>

      <div className="info__subtitle">
        <h3>By Red Cow</h3>
        <h5>12/18/2018</h5>
      </div>

      <div className="info__stats">
        <img src={viewsIcon} alt="Views"></img>
        <h4>1,001,023</h4>
        <img src={likesIcon} alt="Likes"></img>
        <h4>110,985</h4>

      </div>

      <div className="divider"></div>

      <h4 className="info__description">
        On a gusty day in Southern Utah, a group of 25
        daring mountain bikers blew the doors off what is
        possible on two wheels, unleashing some of the
        biggest moments the sport has ever seen. While
        mother nature only allowed for one full run before
        the conditions made it impossible to ride, that was
        all that was needed for event veteran Kyle Strait,
        who won the event for the second time -- eight years
        after his first Red Cow Rampage title
        </h4>
    </div>
  )
}

let commentArray = [
  {
    name: "Micheal Lyons",
    timestamp: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },

  {
    name: "Gary Wong",
    timestamp: "12/18/2018",
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },

  {
    name: "Theodore Duncan",
    timestamp: "11/15/2018",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
]

function Comments() {
  return(
    <>
    <div className="comments">

      <h3 className="comments__counter">3 Comments</h3>
      <h5>JOIN THE CONVERSATION</h5>
      <div className="comments__submitter">

        <div className="profilepic__container">
          <img src={profileImage} alt="Profile"></img>
        </div>
          
        <form id="commentForm" className="comments__form--container">
            <textarea type="text" name="commentBox" placeholder="Add a comment"></textarea>
          <button type="submit" form="commentForm">
            COMMENT
          </button>
        </form>

      </div>
      <div className="divider"></div>
      <div className ="comments__posted">
        <Comment commentObject={commentArray[0]} />
        <Comment commentObject={commentArray[1]} />
        <Comment commentObject={commentArray[2]} />
      </div>
    </div>
    </>
  )
}

function Comment(props) {
  return(
    <>
    <div>
      <div className="comments__comment--container">
        <div className="profilepic__gray"></div>

        <div className="comments__comment--body">
          <h3>{props.commentObject.name}</h3>
            <h5>{props.commentObject.timestamp}</h5>
            <h4>{props.commentObject.comment}</h4>
        </div>
          
      </div>
    </div>
    <div className="divider"></div>
    </>
  )
}

// Side Video Object
const sideVideo = {
  id: 'type of <string>',
  title: 'type of <string>',
  channel: 'type of <string>',
  image: 'type of <string>'
};

//Main Video Object
const mainVideo = {
  id: 'type of <string>',
  title: 'type of <string>',
  description: 'type of <string>',
  channel: 'type of <string>',
  image: 'type of <string>',
  views: 'type of <string>',
  likes: 'type of <string>',
  duration: 'type of <string>',
  video: 'type of <string>',
  timestamp: 'type of <number>',
  comments: 'type of <array>'
};

export default App;
