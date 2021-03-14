import React from 'react';
import ViewsIcon from '../assets/icons/Icon-views.svg';
import LikesIcon from '../assets/icons/Icon-likes.svg';
import './VideoPlayer.scss';

const VideoDetails = (props) => {
    const { title, channel, timestamp, views, likes, description } = props.selectedVideoDetails;
    return (
        <section className='video'>
            <h1 className='video__title'>{title}</h1>
            <div className='video__details'>
                <div className='video__guide'>
                    <div className='video__info'>
                        <h3 className='video__channel'>By {channel}</h3>
                        <span className='video__date'>{props.getFormattedDay(timestamp)}</span>
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
    );
};

export default VideoDetails;