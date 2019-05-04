import React from 'react';
import profileImage from './assets/Images/Mohan-muruge.jpg'
import playingVideo from './assets/Video/BrainStation Sample Video.mp4'
import videoThumbnail from './assets/Images/video-list-0.jpg'
import Header from './components/Header'
import Video from './components/Video'
import Info from './components/Info'
import Comments from './components/Comments'
import SideBar from './components/SideBar'

import './styles/styles.css';

const commentArray = [
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

const sideVideoArray = [
  {
    id: '0',
    title: 'BMX Rampage: 2018 Highlights',
    channel: 'Red Cow',
    image: './assets/Images/video-list-0.jpg'
  },

  {
    id: '1',
    title: 'Become A Travel Pro In One Easy Lesson',
    channel: 'Scotty Cranmer',
    image: './assets/Images/video-list-1.jpg'
  },

  {
    id: '2',
    title: 'Les Houches The Hidden Gem Of The Chamonix',
    channel: 'Cornelia Blair',
    image: './assets/Images/video-list-2.jpg'
  },

  {
    id: '3',
    title: 'Travel Health Useful Medical Information For',
    channel: 'Glen Harper',
    image: './assets/Images/video-list-3.jpg'
  },

  {
    id: '4',
    title: 'Cheap Airline Tickets Great Ways To Save',
    channel: 'Emily Harper',
    image: './assets/Images/video-list-4.jpg'
  },

  {
    id: '5',
    title: 'Take A Romantic Break In A Boutique Hotel',
    channel: 'Ethan Owen',
    image: './assets/Images/video-list-5.jpg'
  },

  {
    id: '6',
    title: 'Choose The Perfect Accommodations',
    channel: 'Lydia Perez',
    image: './assets/Images/video-list-6.jpg'
  },

  {
    id: '7',
    title: 'Cruising Destination Ideas',
    channel: 'Timothy Austin',
    image: './assets/Images/video-list-7.jpg'
  },

  {
    id: '8',
    title: 'Train Travel On Track For Safety',
    channel: 'Scotty Cranmer',
    image: './assets/Images/video-list-8.jpg'
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
  timestamp: '12/18/2018',
  comments: commentArray
};

function App() {
  return (
    <div>
      <Header profilePic={profileImage} />
      <Video thumbnail={mainVideo.image} videoSource={mainVideo.video} />
      
      <main>
        <div>
          <Info />
          <Comments commentArray={mainVideo.comments}/>
        </div>
        <SideBar sideVideos={sideVideoArray} currentVideoId={mainVideo.id} />
      </main>
    </div>
  );
}


//Main Video Object


export default App;
