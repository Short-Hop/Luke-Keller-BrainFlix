import React from 'react';
import axios from 'axios'
import profileImage from './assets/Images/Mohan-muruge.jpg';
import HeaderContainer from './containers/HeaderContainer';
import VideoContainer from './containers/VideoContainer';
import InfoContainer from './containers/InfoContainer';
import CommentsContainer from './containers/CommentsContainer';
import SideBarContainer from './containers/SideBarContainer';
import './styles/styles.css';

const videoListURL = 'http://localhost:8080/videos';

let commentArray = [];



//Placeholder data for the current playing video
const mainVideo = {
  id: '',
  title: '',
  description: '',
  channel: '',
  image: '',
  views: '',
  likes: '',
  duration: '',
  video: '',
  timestamp: '',
  comments: commentArray,
};

class App extends React.Component {

  state = {
    mainVideo: mainVideo,
    sideVideos: [],
    profileImage: profileImage,
    userName: 'Mohan Muruge',
    videoKey: '?api_key=474c09a9-3e5d-405e-b632-cf61462d5d97'
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
    let videoURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/comments';

    axios.post(videoURL, commentObject).then(response => {

      videoURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/';
      axios.get(videoURL).then(response => {
        this.setState({
          mainVideo: response.data,
        })
      })
    })
  }

  // Delete's a comment from the Api and updates the App state
  deleteComment = (event) => {
    let deleteURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/comments/' + event.target.id;

    axios.delete(deleteURL).then(response => {
      let videoURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/';
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
        <VideoContainer mainVideo={this.state.mainVideo} videoKey={this.state.videoKey} />
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

    let videoURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/';
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
      let videoURL = 'http://localhost:8080/videos/' + this.props.match.params.id + '/';

      axios.get(videoURL).then(response => {
        this.setState({
          mainVideo: response.data,
        })
      })
    }
  }
}

export default App;