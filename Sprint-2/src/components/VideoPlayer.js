import React, { Component } from 'react';
import axios from 'axios';
import ViewsIcon from '../assets/icons/Icon-views.svg';
import LikesIcon from '../assets/icons/Icon-likes.svg';
import './VideoPlayer.scss';

class VideoPlayer extends Component {

    state = {
        selectedVideo: null
    }

    makeRestCall() {
        const videoId = this.props.match
            ? this.props.match.params.videoId
            : this.props.selectedVideoId;

        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7a318c59-45cb-4754-b122-5ee4193fa774`)
            .then(response => {
                this.setState({
                    selectedVideo: response.data
                });
            });
    }

    componentDidMount() {
        this.makeRestCall();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match) {
            if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
                this.makeRestCall();
            }
        }
    }

    getFormattedDay(time) {
        let newDate = new Date(time);
        let dd = newDate.getDate();
        let mm = newDate.getMonth() + 1;
        let yyyy = newDate.getFullYear();
        return newDate = `${mm}/ ${dd}/ ${yyyy}`;
    }

    render() {
        if (this.state.selectedVideo) {
            const { id, image, title, channel, timestamp, views, likes, description } = this.state.selectedVideo

            return (
                <>
                    <section className='hero wrapper'>
                        <video key={id} id={id} className='hero__video' width='100%' height='100%' controls poster={image}>
                        </video>
                    </section>

                    <section className='video wrapper'>
                        <h1 className='video__title'>{title}</h1>
                        <div className='video__details'>
                            <div className='video__guide'>
                                <div className='video__info'>
                                    <h3 className='video__channel'>By {channel}</h3>
                                    <span className='video__date'>{this.getFormattedDay(timestamp)}</span>
                                </div>
                                <div className='video__react'>
                                    <div className='video__views'>
                                        <img className='video__icon' src={ViewsIcon} alt='Eye view icon' />
                                        <span className='video__viewNumber'>{views}</span>
                                    </div>
                                    <div className='video__likes'>
                                        <img className='video__icon' src={LikesIcon} alt='Like icon' />
                                        <span className='video__likeNumber'>{likes}</span>
                                    </div>
                                </div>
                            </div>
                            <p className='video__description'>{description}</p>
                        </div>
                    </section>
                </>

            )
        }
        else {
            return null;
        }
    }
}

export default VideoPlayer;