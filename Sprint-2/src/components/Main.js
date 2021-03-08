import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';
import Comments from '../components/Comments';
import CommentDisplay from '../components/CommentDisplay';
import axios from 'axios';
import './Main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Main extends Component {
    state = {
        videoData: [],
        selectedVideoId: null
    }

    componentDidMount() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=7a318c59-45cb-4754-b122-5ee4193fa774').then((response) => {
            this.setState({
                videoData: response.data,
                selectedVideoId: response.data[0].id
            });
        });
    }

    render() {

        const selectedVideoId = this.state.selectedVideoId;

        if (selectedVideoId === null) {
            return (<main className='main'>Loading!</main>)
        }

        return (
            <main className='main'>
                <BrowserRouter>

                    <Switch>
                        <Route exact path="/" component={() =>
                            <>
                                <VideoPlayer
                                    selectedVideoId={selectedVideoId}
                                />
                                <section className='main__section wrapper'>
                                    <div className='main__video'>
                                        <Comments />
                                        <CommentDisplay selectedVideoId={selectedVideoId} />
                                    </div>
                                </section>
                                <VideoList
                                    videoData={this.state.videoData}
                                    selectedVideoId={selectedVideoId}
                                />
                            </>
                        }>
                        </Route>
                        <Route
                            path="/videos/:videoId"
                            render={(props) =>
                                <>
                                    <VideoPlayer {...props} />
                                    <section className='main__section wrapper'>
                                        <div className='main__video'>
                                            <Comments />
                                            <CommentDisplay selectedVideoId={selectedVideoId} />
                                        </div>
                                    </section>
                                    <VideoList
                                        {...props}
                                        videoData={this.state.videoData}
                                    />
                                </>
                            } />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}

export default Main;