import React from 'react';
import { Link } from 'react-router-dom';
import './VideoList.scss';

const VideoList = (props) => {
    const visibleVideoList = props.videoData
    return (
        <section className='videos' >
            <h4 className='videos__title'>Next Video</h4>
            <article className='videos__list' >
                {visibleVideoList.map(video => {
                    return (
                        <Link className='videos__link' key={video.id} to={`/videos/${video.id}`} >
                            <div className='videos__item' key={video.id} id={video.id}>
                                <img className='videos__image' src={video.image} alt={video.name} />
                                <div className='videos__info'>
                                    <p className='videos__description'>{video.title}</p>
                                    <p className='videos__channel'>{video.channel}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </article>
        </section >
    );
};

export default VideoList;