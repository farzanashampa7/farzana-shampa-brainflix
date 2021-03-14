import React from 'react';
import { withRouter } from 'react-router-dom';
import './SuccessUpload.scss';

const SuccessfulUpload = () => {
    return (
        <div className='successUpload'>
            <h1 className='successUpload__title'>Your video has been uploaded successfully!</h1>
            <a href='/' className='successUpload__link'>Back to home</a>
        </div>
    );
};

export default withRouter(SuccessfulUpload);