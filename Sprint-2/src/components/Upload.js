import React from 'react';
import UpLoadImage from '../assets/images/Upload-video-preview.jpg';
import './Upload.scss';

const Upload = () => {

    const handleSubmit = () =>
        // e.preventDefault();
        alert('Your video has been uploaded!')
    // window.location.href = '/';


    return (
        <section className='upload wrapper'>
            <h1 className='upload__title'>Upload Video</h1>
            <div className='upload__section'>
                <div className='upload__video'>
                    <h4 className='upload__label'>Video Thumbnail</h4>
                    <img className='upload__image' src={UpLoadImage} alt='Upload preview' />
                </div>
                <form className='upload__form' onSubmit={() => handleSubmit()}>
                    <label className='upload__label'>Title your video
                        <input className='upload__input' type='text' name='text' placeholder='Add a title your video' />
                    </label>
                    <label className='upload__label'>Add a video description
                        <textarea className='upload__textarea' rows='5' type=' text' name='description' placeholder='Add a description of your video' />
                    </label>
                    <div className='upload__links' >
                        <button className='upload__button' type='submit' action='/' >Publish</button>
                        <a className='upload__link' href='/' >Cancel </a>
                    </div>

                </form>

            </div>

        </section>


    )

}

export default Upload;