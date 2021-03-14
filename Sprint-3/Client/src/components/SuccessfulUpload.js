import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const SuccessfulUpload = () => {
    return (
        <div>
            <h1>Your video has been uploaded successfully!</h1>
            <Link to='/'>Back to home</Link>
        </div>
    );
};

export default withRouter(SuccessfulUpload);