import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import VideoListJSON from './data/videos.json';
import VideoDataJSON from './data/video-details.json';
import './App.scss';


class App extends Component {
  state = {
    videoData: VideoDataJSON,
    videoList: VideoListJSON,
    videoID: VideoListJSON[0].id
  }

  getFormattedDay(time) {
    let newDate = new Date(time);
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    let yyyy = newDate.getFullYear();
    return newDate = `${mm}/ ${dd}/ ${yyyy}`;

  }

  showCurrentVideoData = (videoId) => {
    this.setState({
      videoID: videoId
    });
  }

  render() {
    let currentVideoID = this.state.videoID,
      visibleVideoList = this.state.videoList.filter(item => item.id !== currentVideoID),
      visibleVideoData = this.state.videoData.filter(item => item.id === currentVideoID)[0];

    return (
      <div className="App">
        <Header />
        <Main video={visibleVideoData} videoList={visibleVideoList} getFormattedDay={this.getFormattedDay} showCurrentVideoData={this.showCurrentVideoData} />
      </div>

    )
  }
}

export default App;
