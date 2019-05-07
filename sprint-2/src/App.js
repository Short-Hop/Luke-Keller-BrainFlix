import React from 'react';
import axios from 'axios'
import profileImage from './assets/Images/Mohan-muruge.jpg';
import Header from './components/Header';
import Video from './components/Video';
import Info from './components/Info';
import Comments from './components/Comments';
import SideBar from './components/SideBar';

import './styles/styles.css';

const videoListURL = 'https://project-2-api.herokuapp.com/videos?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a'
let apiKey = '?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a'

let commentArray=[]

//Placeholder data for the current playing video
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
  comments: commentArray,
};

// Function that converts a timestamp to easily-read format
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

class App extends React.Component {
  
  state = {
    mainVideo: mainVideo,
    sideVideoArray: [],
    profileImage: profileImage,
  }

  render() {
    return (
      <div>
        <Header profilePic={this.state.profileImage} />
        <Video mainVideo={this.state.mainVideo}/>
        <main>
          <div>
            <Info mainVideo={this.state.mainVideo} dateConvert={dateConvert} />
            <Comments mainVideo={this.state.mainVideo} dateConvert={dateConvert}/>
          </div>
          <SideBar sideVideos={this.state.sideVideoArray} mainVideo={this.state.mainVideo} />
        </main>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match)

    let videoURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/' + apiKey;
    console.log(videoURL);
    
    axios.get(videoListURL).then(response => {
      let sideVideoArray = [];
      response.data.forEach(item => {
        sideVideoArray.push(item);
      })

      this.setState({
        sideVideoArray: sideVideoArray,
      })
    })

    axios.get(videoURL).then(response => {
      this.setState({
        mainVideo: response.data,
      })
    })  
  }

  componentDidUpdate(prevprops) {
    if (prevprops.match.params.id !== this.props.match.params.id) {
      let videoURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/' + apiKey;

      axios.get(videoURL).then(response => {
        this.setState({
          mainVideo: response.data,
        })
      })  
    }

    

  }
}

export default App;
