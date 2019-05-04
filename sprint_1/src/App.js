import React from 'react';
import profileImage from './assets/Images/Mohan-muruge.jpg';
import playingVideo from './assets/Video/BrainStation Sample Video.mp4';
import videoThumbnail from './assets/Images/video-list-0.jpg';
import Header from './components/Header';
import Video from './components/Video';
import Info from './components/Info';
import Comments from './components/Comments';
import SideBar from './components/SideBar';

import thumbnail from './assets/Images/video-list-0.jpg'
import thumbnail1 from './assets/Images/video-list-1.jpg'
import thumbnail2 from './assets/Images/video-list-2.jpg'
import thumbnail3 from './assets/Images/video-list-3.jpg'
import thumbnail4 from './assets/Images/video-list-4.jpg'
import thumbnail5 from './assets/Images/video-list-5.jpg'
import thumbnail6 from './assets/Images/video-list-6.jpg'
import thumbnail7 from './assets/Images/video-list-7.jpg'
import thumbnail8 from './assets/Images/video-list-8.jpg'

import './styles/styles.css';

const commentArray = [
  {
    name: "Micheal Lyons",
    timestamp: 1545120000000,
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },

  {
    name: "Gary Wong",
    timestamp: 1545120000000,
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },

  {
    name: "Theodore Duncan",
    timestamp: 1542268800000,
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
]

const sideVideoArray = [
  {
    id: '0',
    title: 'BMX Rampage: 2018 Highlights',
    channel: 'Red Cow',
    image: thumbnail,
  },

  {
    id: '1',
    title: 'Become A Travel Pro In One Easy Lesson',
    channel: 'Scotty Cranmer',
    image: thumbnail1,
  },

  {
    id: '2',
    title: 'Les Houches The Hidden Gem Of The Chamonix',
    channel: 'Cornelia Blair',
    image: thumbnail2,
  },

  {
    id: '3',
    title: 'Travel Health Useful Medical Information For',
    channel: 'Glen Harper',
    image: thumbnail3,
  },

  {
    id: '4',
    title: 'Cheap Airline Tickets Great Ways To Save',
    channel: 'Emily Harper',
    image: thumbnail4,
  },

  {
    id: '5',
    title: 'Take A Romantic Break In A Boutique Hotel',
    channel: 'Ethan Owen',
    image: thumbnail5,
  },

  {
    id: '6',
    title: 'Choose The Perfect Accommodations',
    channel: 'Lydia Perez',
    image: thumbnail6,
  },

  {
    id: '7',
    title: 'Cruising Destination Ideas',
    channel: 'Timothy Austin',
    image: thumbnail7,
  },

  {
    id: '8',
    title: 'Train Travel On Track For Safety',
    channel: 'Scotty Cranmer',
    image: thumbnail8,
  },
]

const mainVideo = {
  id: '0',
  title: 'BMX Rampage: 2018 Highlights',
  description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
  channel: 'Red Cow',
  image: videoThumbnail,
  views: '1,001,023',
  likes: '110,985',
  duration: '42',
  video: playingVideo,
  timestamp: 1545120000000,
  comments: commentArray
};


function dateConvert(date) {;
  let now = new Date().getTime();
  let timeAgo = new Date(now - date);

  let unit = ''
  let value = ''
  

  if((timeAgo.getUTCFullYear() - 1970) > 0) {
    value = timeAgo.getUTCFullYear() - 1970
    unit = 'years';
  } else if (timeAgo.getUTCMonth() > 0) {
    value = timeAgo.getUTCMonth()
    unit = 'months';
  } else if ((timeAgo.getUTCDate() - 1) > 0) {
    value = timeAgo.getUTCDate() - 1;
    unit = 'days';
  } else if (timeAgo.getUTCHours() > 0) {
    value = timeAgo.getUTCHours();
    unit = 'hours';
  } else if (timeAgo.getUTCMinutes() > 0) {
    value = timeAgo.getUTCMinutes();
    unit = 'minutes';
  } else if (timeAgo.getUTCSeconds() > 0) {
    value = timeAgo.getUTCSeconds();
    unit = 'seconds';
  }

  if (value === 1) {
    unit = unit.substr(0, unit.length - 1)
  }
  
  return (value + ' ' + unit + ' ago')
}

commentArray.forEach(item => { 
    item.timestamp = dateConvert(item.timestamp);
})

mainVideo.timestamp = dateConvert(mainVideo.timestamp);

function App() {
  return (
    <div>
      <Header profilePic={profileImage} />
      <Video thumbnail={mainVideo.image} videoSource={mainVideo.video} />
      
      <main>
        <div>
          <Info mainVideo={mainVideo}/>
          <Comments commentArray={mainVideo.comments}/>
        </div>
        <SideBar sideVideos={sideVideoArray} currentVideoId={mainVideo.id} />
      </main>
    </div>
  );
}


//Main Video Object


export default App;
