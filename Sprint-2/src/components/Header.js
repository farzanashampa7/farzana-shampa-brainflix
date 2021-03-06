import React from 'react';
import Logo from '../assets/icons/Logo-brainflix.svg';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header wrapper' >
            <a href='/'>
                <img className='header__icon' src={Logo} alt='Brainflix Logo' />
            </a>
            {/* <img className='header__icon' src={Logo} alt='Brainflix Logo' /> */}
            <div className='header__form'>
                <input className='header__input' type='text' name='search' placeholder='Search'></input>
                <Link to='/upload'>
                    <div className='header__upload'>
                        <button className='header__button' type='submit'>Upload</button>
                        <img className='header__img' src={MohanMuruge} alt='Mohan Muruge' />
                    </div>
                </Link>

            </div>
        </header>
    )

}

export default Header;