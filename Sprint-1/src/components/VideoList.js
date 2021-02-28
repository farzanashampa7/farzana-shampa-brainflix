import React from 'react';
import './VideoList.scss';

const VideoList = (props) => {
    const handleClick = (event) => {
        props.showCurrentVideoData(event.currentTarget.id);
    }
    return (
        <section className='videos wrapper' >
            <h4 className='videos__title'>Next Video</h4>
            <article className='videos__list' >
                {props.videoList.map(video => {
                    return (
                        <div className='videos__item' key={video.id} id={video.id}
                            onClick={(e) => handleClick(e)}>
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
//         return (
//             <section className='videos wrapper'>
//                 <h4 className='videos__title'>Next Video</h4>
//                 <article className='videos__list'>
//                     {this.state.videoList.map(video => {
//                         return (
//                             <div className='videos__item' key={video.id} id={video.id} onClick={(e) => handleClick(e.target.id.value)}>
//                                 <img className='videos__image' src={video.image} alt='Video image' />
//                                 <div className='videos__info'>
//                                     <p className='videos__description'>{video.title}</p>
//                                     <p className='videos__channel'>{video.channel}</p>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </article>
//             </section>
//         )
//     }
// }


export default VideoList;