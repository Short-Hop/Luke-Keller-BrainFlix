import React from 'react';
import axios from 'axios'
import profileImage from './assets/Images/Mohan-muruge.jpg';
import Header from './components/Header';
import Video from './components/Video';
import Info from './components/Info';
import Comments from './components/Comments';
import SideBar from './components/SideBar';

import './styles/styles.css';
import { restElement } from '@babel/types';

const videoListURL = 'https://project-2-api.herokuapp.com/videos?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a';
let apiKey = '?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a';

let commentArray=[];

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
  
  if((now - date) < 0) {
    return "Just now"
  }

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




class App extends React.Component {

  state = {
    mainVideo: mainVideo,
    sideVideoArray: [],
    profileImage: profileImage,
    userName: 'Mohan Muruge'
  }

  postComment = (event) => {
    event.preventDefault();
    let comment = event.target.commentBox.value;
    let name = this.state.userName;

    let commentObject = {
      name,
      comment
    }
    let videoURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/comments' + apiKey;
    
    axios.post(videoURL, commentObject).then(response => {

      videoURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/' + apiKey;
      axios.get(videoURL).then(response => {
        this.setState({
          mainVideo: response.data,
        })
      })
    })
  }

  deleteComment = (event) => {
    let deleteURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/comments/' + event.target.id + apiKey;

    axios.delete(deleteURL).then(response => {
      let videoURL = 'https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '/' + apiKey;
      axios.get(videoURL).then(response => {
        this.setState({
          mainVideo: response.data,
        })
      })
    })  
  }

  // axios.delete('https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments/de0d1e59-ae94-461f-908b-398d1d7f142e?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a')

  render() {
    return (
      <div>
        <Header profilePic={this.state.profileImage} />
        <Video mainVideo={this.state.mainVideo}/>
        <main>
          <div>
            <Info mainVideo={this.state.mainVideo} dateConvert={dateConvert} />
            <Comments mainVideo={this.state.mainVideo} dateConvert={dateConvert} postComment={this.postComment} deleteComment={this.deleteComment} userName={this.state.userName}/>
          </div>
          <SideBar sideVideos={this.state.sideVideoArray} mainVideo={this.state.mainVideo} />
        </main>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match.params.id)

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
