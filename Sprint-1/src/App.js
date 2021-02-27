import React, { Component } from 'react';
import Header from './components/Header';
import Comments from './components/Comments';
import CommentDisplay from './components/CommentDisplay';
import VideoList from './components/VideoList';
import data from './data/video-details.json';
import './App.scss';


class App extends Component {
  state = {
    commentList: data
  }

  getFormattedDay(time) {
    let newDate = new Date(time);
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    let yyyy = newDate.getFullYear();
    return newDate = `${mm}/ ${dd}/ ${yyyy}`;

  }

  comment1 = this.state.commentList[0]

  render() {
    return (
      <div className="App">
        <Header />
        <Comments />
        <CommentDisplay commentList={this.comment1} getFormattedDay={this.getFormattedDay} />
        <VideoList />
      </div>

    )
  }
}

export default App;
