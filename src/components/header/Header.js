import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import { FaSearch, FaRegUser, FaOpencart } from "react-icons/fa";
const headerlogo = "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo.png";
export default function Header() {
  return (
    <>
    <header className='rel-header'>
        <div className='rel-container'>
            <div className='rel-flex rel-align--center'>
                <div className='rel-column__auto'>
                    <div className='rel-header__logo'>
                        <img alt="logo" src={headerlogo}></img>
                    </div>
                </div>
                <div className='rel-column__auto'>
                    <Navbar />
                </div>
                <div className='rel-column__auto rel-header__option'>
                    <ul className='rel-right'>
                        <li><a className='rel-header--icons' href="google.com"><FaSearch /></a></li>
                        <li><a className='rel-header--icons' href="google.com"><FaRegUser /></a></li>
                        <li><a className='rel-header--icons' href="google.com"><FaOpencart /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
