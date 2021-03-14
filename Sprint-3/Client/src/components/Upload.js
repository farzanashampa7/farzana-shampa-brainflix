import axios from 'axios';
import React from 'react';
import './Upload.scss';
import { withRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const APIBaseURL = 'http://localhost:8080';
const uploadURL = 'http://localhost:8080/static-files/images/upload.jpg';

const Upload = () => {
    const handleSubmit = (e) => {
        const form = e.target;
        e.preventDefault();

        axios
            .post(`${APIBaseURL}/videos`, {
                id: uuidv4(),
                title: form.title.value,
                channel: form.channel.value,
                description: form.description.value
            })
            .then(res => {
                console.log(res)
                window.location = '/success'
            })
            .catch(err => console.log(err))
    }

    return (
        < section className='upload wrapper' >
            <h1 className='upload__title'>Upload Video</h1>
            <div className='upload__section'>
                <div className='upload__video'>
                    <h4 className='upload__label'>Video Thumbnail</h4>
                    <img className='upload__image' src={uploadURL} alt='Upload preview' />
                </div>
                <form className='upload__form' onSubmit={handleSubmit}>
                    <label className='upload__label'>Title your video
                        <input className='upload__input' type='text' name='title' placeholder='Add a title your video' />
                    </label>
                    <label className='upload__label'>Add your channel
                        <input className='upload__input' type='text' name='channel' placeholder='Add your channel' />
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
        </section >

    )

}

export default withRouter(Upload);