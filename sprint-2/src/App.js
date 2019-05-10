import React from 'react';
import axios from 'axios'
import profileImage from './assets/Images/Mohan-muruge.jpg';
import HeaderContainer from './containers/HeaderContainer';
import VideoContainer from './containers/VideoContainer';
import InfoContainer from './containers/InfoContainer';
import CommentsContainer from './containers/CommentsContainer';
import SideBarContainer from './containers/SideBarContainer';
import './styles/styles.css';

const videoListURL = 'https://project-2-api.herokuapp.com/videos?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a';
let apiKey = '?api_key=1c4367ac-fc44-4603-9767-0d69d2279d8a';

let commentArray = [];

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

class App extends React.Component {

  state = {
    mainVideo: mainVideo,
    sideVideos: [],
    profileImage: profileImage,
    userName: 'Mohan Muruge'
  }

  // Posts a comment to the api then updates the App's state
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

  // Delete's a comment from the Api and updates the App state
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

  render() {
    return (
      <div>
        <HeaderContainer profilePic={this.state.profileImage} />
        <VideoContainer mainVideo={this.state.mainVideo} />
        <main>
          <div>
            <InfoContainer mainVideo={this.state.mainVideo} />
            <CommentsContainer mainVideo={this.state.mainVideo} postComment={this.postComment} deleteComment={this.deleteComment} userName={this.state.userName} />
          </div>
          <SideBarContainer sideVideos={this.state.sideVideos} mainVideo={this.state.mainVideo} />
        </main>
      </div>
    );
  }

  // Loads the initial video data from the api based on the current url
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
        sideVideos: sideVideoArray,
      })
    })

    axios.get(videoURL).then(response => {
      this.setState({
        mainVideo: response.data,
      })
    })
  }

  // Checks to make sure the URL has changed, then updates the state based on the new URL
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
