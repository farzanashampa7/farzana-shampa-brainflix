import React from 'react';
import './Hero.scss';
import ViewsIcon from '../assets/icons/Icon-views.svg';
import LikesIcon from '../assets/icons/Icon-likes.svg';


const HeroDetails = ({ video, getFormattedDay }) => {

    return (
        <section className='video wrapper'>
            <h1 className='video__title'>{video.title}</h1>
            <div className='video__details'>
                <div className='video__guide'>
                    <div className='video__info'>
                        <h3 className='video__channel'>By {video.channel}</h3>
                        <span className='video__date'>{getFormattedDay(video.timestamp)}</span>
                    </div>
                    <div className='video__react'>
                        <div className='video__views'>
                            <img className='video__icon' src={ViewsIcon} alt='Eye view icon' />
                            <span className='video__viewNumber'>{video.views}</span>
                        </div>
                        <div className='video__likes'>
                            <img className='video__icon' src={LikesIcon} alt='Like icon' />
                            <span className='video__likeNumber'>{video.likes}</span>
                        </div>
                    </div>
                </div>
                <p className='video__description'>{video.description}</p>
            </div>
        </section>
    )
}

export default HeroDetails;

