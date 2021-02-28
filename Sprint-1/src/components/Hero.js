// import React, { Component } from 'react';
import './Hero.scss';
import ViewsIcon from '../assets/icons/Icon-views.svg';
import LikesIcon from '../assets/icons/Icon-likes.svg';
// import videoData from '../data/video-details.json';

// class Hero extends Component {
//     state = {
//         video: videoData[0]
//     }

//     render() {
//         // console.log(this.state.video)
//         return (
//             <section className='hero wrapper'>
//                 <video key={this.state.video.id} className='hero__video' width='100%' height='300px' controls poster={this.state.video.image}>
//                     {/* <source src='' /> */}
//                 </video>
//                 <section className='video'>
//                     <h1 className='video__title'>{this.state.video.title}</h1>
//                     <div className='video__details'>
//                         <div className='video__info'>
//                             <h3 className='video__channel'>By {this.state.video.channel}</h3>
//                             {/* <span className='video__date'>{getFormattedDay(this.state.video.timestamp)}</span> */}
//                         </div>
//                     </div>
//                 </section>
//             </section>
//         )
//     }
// }

const Hero = ({ video, getFormattedDay }) => {
    return (
        <section className='hero wrapper'>

            <video key={video.id} id={video.id} className='hero__video' width='100%' height='100%' controls poster={video.image}>
            </video>
            <section className='video'>
                <h1 className='video__title'>{video.title}</h1>
                <div className='video__details'>
                    <div className='video__info'>
                        <h3 className='video__channel'>By {video.channel}</h3>
                        <span className='video__date'>{getFormattedDay(video.timestamp)}</span>
                    </div>
                    <div className='video__react'>
                        <div className='video__views'>
                            <img className='video__icon' src={ViewsIcon} alt='Image of view icon' />
                            <span className='video__viewNumber'>{video.views}</span>
                        </div>
                        <div className='video__likes'>
                            <img className='video__icon' src={LikesIcon} alt='Image of like icon' />
                            <span className='video__likeNumber'>{video.likes}</span>
                        </div>
                    </div>
                    <p className='video__description'>{video.description}</p>
                </div>
            </section>
        </section>
    )
}



export default Hero;

