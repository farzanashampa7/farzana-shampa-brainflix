// import React, { Component } from 'react';
import Logo from '../assets/icons/Logo-brainflix.svg';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';
import './Header.scss';

const Header = () => {
    return (
        <header className='header wrapper' >
            {/* <div className='header__logo'> */}
            <img className='header__icon' src={Logo} alt='Brainflix Logo' />
            <input className='header__input' type='text' name='search' placeholder='Search'></input>
            <div className='header__upload'>
                <button className='header__button' type='submit'>Upload</button>
                <img className='header__img' src={MohanMuruge} alt='Mohan Muruge' />
            </div>
            {/* </div> */}
        </header>
    )
}

export default Header;