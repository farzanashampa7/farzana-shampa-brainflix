import React from 'react';
import UpLoadImage from '../assets/images/Upload-video-preview.jpg';

const Upload = () => {

    const handleSubmit = () =>
        // e.preventDefault();
        alert('Your video has been uploaded!')
    // window.location.href = '/';


    return (
        <section>
            <h1>Upload Video</h1>
            <div>
                <div>
                    <h4>Video Thumbnail</h4>
                    <img src={UpLoadImage} alt='Upload preview' />
                </div>
                <form onSubmit={() => handleSubmit()}>
                    <label>Title your video
                        <input type='text' name='text' placeholder='Add a title your video' />
                    </label>
                    <label>Add a video description
                        <textarea type='text' name='description' placeholder='Add a description of your video' />
                    </label>
                    <button type='submit' action='/' >Publish</button>
                </form>

            </div>

        </section>


    )

}

export default Upload;