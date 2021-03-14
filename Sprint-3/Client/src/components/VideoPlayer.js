import React from 'react';
import './VideoPlayer.scss';


const VideoPlayer = (props) => {
    const id = props.selectedVideoDetails.id;
    const image = props.selectedVideoDetails.image;
    return (
        <section className='hero wrapper'>
            <video key={id} id={id} className='hero__video' controls poster={image}>
            </video>
        </section>
    );
};

export default VideoPlayer;