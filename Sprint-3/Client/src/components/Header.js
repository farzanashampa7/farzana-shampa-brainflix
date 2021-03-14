import React from 'react';
import Logo from '../assets/icons/Logo-brainflix.svg';
import UploadIcon from '../assets/icons/Icon-upload.svg';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';
import './Header.scss';

const Header = () => {
    return (
        <header className='header wrapper' >
            <a href='/'>
                <img className='header__icon' src={Logo} alt='Brainflix Logo' />
            </a>
            <div className='header__form'>
                <input className='header__input' type='text' name='search' placeholder='Search'></input>
                <div className='header__upload'>
                    <a className='header__button' href='/upload'><img className='header__upload-icon' src={UploadIcon} alt='Upload Icon' /> Upload</a>
                    <img className='header__img' src={MohanMuruge} alt='Mohan Muruge' />
                </div>

            </div>
        </header>
    )

}

export default Header;