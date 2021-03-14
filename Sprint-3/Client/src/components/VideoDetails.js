import React from 'react';
// import axios from 'axios';
import ViewsIcon from '../assets/icons/Icon-views.svg';
import LikesIcon from '../assets/icons/Icon-likes.svg';
import './VideoPlayer.scss';

// class VideoDetails extends Component {

//     // state = {
//     //     selectedVideo: null
//     // }

//     // makeRestCall() {
//     //     const videoId = this.props.match
//     //         ? this.props.match.params.videoId
//     //         : this.props.selectedVideoId;

//     //     axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7a318c59-45cb-4754-b122-5ee4193fa774`)
//     //         .then(response => {
//     //             this.setState({
//     //                 selectedVideo: response.data
//     //             });
//     //         });
//     // }

//     // let {selectedVideoId} = this.props.selectedVideoId;

//     // componentDidMount() {
//     //     let videoId = this.props.selectedVideoId;
//     //     // this.makeRestCall();
//     //     axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7a318c59-45cb-4754-b122-5ee4193fa774`)
//     //         .then(response => {
//     //             this.setState({
//     //                 selectedVideo: response.data
//     //             });
//     //         });
//     // }

//     // componentDidUpdate(prevProps) {
//     //     if (this.props.match) {
//     //         if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
//     //             this.makeRestCall();
//     //         }
//     //     }
//     // }

//     // getFormattedDay(time) {
//     //     let newDate = new Date(time);
//     //     let dd = newDate.getDate();
//     //     let mm = newDate.getMonth() + 1;
//     //     let yyyy = newDate.getFullYear();
//     //     return newDate = `${mm}/ ${dd}/ ${yyyy}`;
//     // }

//     render() {
//         // if (this.state.selectedVideo) {
//         //     const { title, channel, timestamp, views, likes, description } = this.state.selectedVideo

//         return (
//             <section className='video wrapper'>
//                 {/* <h1 className='video__title'>{title}</h1> */}
//                 {/* <div className='video__details'>
//                         <div className='video__guide'>
//                             <div className='video__info'>
//                                 <h3 className='video__channel'>By {channel}</h3>
//                                 <span className='video__date'>{this.getFormattedDay(timestamp)}</span>
//                             </div>
//                             <div className='video__react'>
//                                 <div className='video__views'>
//                                     <img className='video__icon' src={ViewsIcon} alt='Eye view icon' />
//                                     <span className='video__viewNumber'>{views}</span>
//                                 </div>
//                                 <div className='video__likes'>
//                                     <img className='video__icon' src={LikesIcon} alt='Like icon' />
//                                     <span className='video__likeNumber'>{likes}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className='video__description'>{description}</p>
//                     </div> */}
//             </section>
//         );
//     }
//     // }

// }

// export default VideoDetails;

// import React from 'react';

const VideoDetails = (props) => {
    const { title, channel, timestamp, views, likes, description } = props.selectedVideoDetails;
    return (
        <section className='video wrapper'>
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