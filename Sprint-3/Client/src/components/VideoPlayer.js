import React from 'react';
import './VideoPlayer.scss';

// class VideoPlayer extends Component {
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

//     // componentDidMount() {
//     //     this.makeRestCall();
//     // }

//     // componentDidUpdate(prevProps) {
//     //     if (this.props.match) {
//     //         if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
//     //             this.makeRestCall();
//     //         }
//     //     }
//     // }

//     render() {
//         // if (this.state.selectedVideo) {
//         //     const { id, image } = this.state.selectedVideo
//         return (
//             <section className='hero wrapper'>
//                 {/* <video key={id} id={id} className='hero__video' width='100%' height='100%' controls poster={image}>
//                     </video> */}
//             </section>
//         );
//     }
// }
// // }

// import React from 'react';

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