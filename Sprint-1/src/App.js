import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Comments from './components/Comments';
import CommentDisplay from './components/CommentDisplay';
import VideoList from './components/VideoList';
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
        <Hero video={visibleVideoData} getFormattedDay={this.getFormattedDay} />
        <Comments />
        <CommentDisplay video={visibleVideoData} getFormattedDay={this.getFormattedDay} />
        <VideoList videoList={visibleVideoList} showCurrentVideoData={this.showCurrentVideoData} />
      </div>

    )
  }
}

export default App;
