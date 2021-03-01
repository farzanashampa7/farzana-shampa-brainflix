import React from 'react';
import './Hero.scss';

const Hero = ({ video }) => {
    return (
        <section className='hero wrapper'>
            <video key={video.id} id={video.id} className='hero__video' width='100%' height='100%' controls poster={video.image}>
            </video>

        </section>
    )
}

export default Hero;

