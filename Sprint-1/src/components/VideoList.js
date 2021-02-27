import React, { Component } from 'react';
import './VideoList.scss';
import videoData from '../data/videos.json';


class VideoList extends Component {
    state = {
        videoList: videoData
    }

    render() {
        return (
            <section className='videos wrapper'>
                <h4 className='videos__title'>Next Video</h4>
                <article className='videos__list'>
                    {this.state.videoList.map(video => {
                        return (
                            <div className='videos__item' id={video.id}>
                                <img className='videos__image' src={video.image} alt='Video image' />
                                <div className='videos__info'>
                                    <p className='videos__description'>{video.title}</p>
                                    <p className='videos__channel'>{video.channel}</p>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </section>
        )
    }
}


export default VideoList;