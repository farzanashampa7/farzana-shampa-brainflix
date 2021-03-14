import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import VideoList from '../components/VideoList';
import Comments from '../components/Comments';
import CommentDisplay from '../components/CommentDisplay';
import axios from 'axios';
import './Main.scss';

const APIBaseURL = 'http://localhost:8080';

class Main extends Component {
    state = {
        videoData: [],
        selectedVideoDetails: [],
        selectedVideoId: null
    }

    getFormattedDay(time) {
        let newDate = new Date(time);
        let dd = newDate.getDate();
        let mm = newDate.getMonth() + 1;
        let yyyy = newDate.getFullYear();
        return newDate = `${mm}/ ${dd}/ ${yyyy}`;
    }

    getVideoList = (givenId) => {
        axios.get(`${APIBaseURL}/videos`)
            .then((response) => {
                let firstVideoId = response.data[0].id;
                let videoList = response.data;
                let selectedId = givenId ? givenId : firstVideoId;
                let videoDataList = videoList.filter(video => video.id !== selectedId);
                this.setState({
                    selectedVideoId: selectedId,
                    videoData: videoDataList
                });
            });
    }

    getVideoDetails = (providedId) => {
        let videoId = providedId ? providedId : this.props.match.params.videoId;
        axios.get(`${APIBaseURL}/videos/${videoId}`)
            .then((response) => {
                this.setState({
                    selectedVideoDetails: response.data
                });

            });

    }
    componentDidMount() {
        this.getVideoList();
        this.getVideoDetails('1af0jruup5gu');

    }

    componentDidUpdate(prevProps) {
        let newVideoId = this.props.match.params.videoId;
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.getVideoDetails(newVideoId)
            this.getVideoList(newVideoId)
            window.scrollTo(0, 0)
        }
    }

    render() {

        const selectedVideoId = this.state.selectedVideoId;
        const selectedVideoDetails = this.state.selectedVideoDetails;

        if (selectedVideoId === null) {
            return (<main className='main'>Loading!</main>)
        }

        if (selectedVideoDetails === null) {
            return (<main className='main'>Loading!</main>)
        }

        return (
            <main className='main'>
                <VideoPlayer selectedVideoDetails={selectedVideoDetails} />
                <div className='main__videoList wrapper'>
                    <div className='main__videos'>
                        <VideoDetails selectedVideoDetails={selectedVideoDetails} getFormattedDay={this.getFormattedDay} />
                        <Comments />
                        <CommentDisplay selectedVideoId={selectedVideoId} />
                    </div>
                    <VideoList
                        videoData={this.state.videoData}
                        selectedVideoId={selectedVideoId}
                    />

                </div>


            </main>
        )
    }
}

export default Main;