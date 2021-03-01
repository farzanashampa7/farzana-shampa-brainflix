import React from 'react';
import Hero from '../components/Hero';
import HeroDetails from './HeroDetails';
import Comments from '../components/Comments';
import CommentDisplay from '../components/CommentDisplay';
import VideoList from '../components/VideoList';
import './Main.scss';

const Main = ({ video, videoList, getFormattedDay, showCurrentVideoData }) => {
    return (
        <main className='main'>
            <Hero video={video} />
            <section className='main__section wrapper'>
                <div className='main__video'>
                    <HeroDetails video={video} getFormattedDay={getFormattedDay} />
                    <Comments />
                    <CommentDisplay video={video} getFormattedDay={getFormattedDay} />
                </div>
                <VideoList videoList={videoList} showCurrentVideoData={showCurrentVideoData} />
            </section>
        </main>
    )
}

export default Main;