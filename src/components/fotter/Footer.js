import React from 'react';
import Socialmedia from '../Socialmedia';
import "./Footer.css";
import { RiMapPinLine } from "react-icons/ri";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className='rel-footer'>
                <div className='rel-footer-top'>
                    <div className='rel-container-full'>
                        <div className='rel-footer-top__wrap rel-flex'>
                            <div className='rel-footer__item rel-collg-3 rel-colsm-half'>
                                <div className='rel-footer-logo'>
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo-2.png' alt='quarter' />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                                <div className='rel-footer-address'>
                                    <ul>
                                        <li>
                                            <span className='rel-icon'><RiMapPinLine /></span>
                                            <span>Brooklyn, New York, United States</span>
                                        </li>
                                        <li>
                                            <span className='rel-icon'><FiPhoneCall /></span>
                                            <a href='tel:+0123-456789' title='+0123-456789'>+0123-456789</a>
                                        </li>
                                        <li>
                                            <span className='rel-icon'><FiMail /></span>
                                            <a href='mailto:' title='example@example.com'>example@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <Socialmedia />
                            </div>
                            <div className='rel-footer__item rel-menu__list'>
                                <h4 className='rel-footer--title'>Company</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href='google.com' title='about'>About</a></li>
                                        <li><a href='google.com' title='blog'>Blog</a></li>
                                        <li><a href='google.com' title='All Products'>All Products</a></li>
                                        <li><a href='google.com' title='contact'>Contact</a></li>
                                        <li><a href='google.com' title='faq'>FAQ</a></li>
                                        <li><a href='google.com' title='contact us'>Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-footer__item rel-menu__list'>
                                <h4 className='rel-footer--title'>Services</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href='google.com' title='cart'>Cart</a></li>
                                        <li><a href='google.com' title='wishlist'>Wish List</a></li>
                                        <li><a href='google.com' title='login'>Login</a></li>
                                        <li><a href='google.com' title='checkout'>Checkout</a></li>
                                        <li><a href='google.com' title='Terms &amp; Conditions'>Terms &amp; Conditions</a></li>
                                        <li><a href='google.com' title='Promotional Offers'>Promotional Offers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-footer__item rel-menu__list'>
                                <h4 className='rel-footer--title'>Customer Care</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href='google.com' title='login'>Login</a></li>
                                        <li><a href='google.com' title='my-account'>My account</a></li>
                                        <li><a href='google.com' title='wishlist'>Wish List</a></li>
                                        <li><a href='google.com' title='add-listing'>Add listing</a></li>
                                        <li><a href='google.com' title='faq'>FAQ</a></li>
                                        <li><a href='google.com' title='contact'>Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='rel-footer__item rel-collg-3 rel-colsm-half'>
                                <h4 className='rel-footer--title'>Newsletter</h4>
                                <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                <div className="footer-newsletter">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="Email*" />
                                        <div className="btn-wrapper">
                                            <button className="theme-btn-1 btn" type="submit"><FaLocationArrow /></button>
                                        </div>
                                    </form>
                                </div>
                                <h5>We Accept</h5>
                                <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/payment-4.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rel-footer-bottom'>
                    <div className='rel-container-full'>
                        <div className='rel-flex'>
                            <div className='rel-colmd-half'>
                                <p>All Rights Reserved @ Company 2022</p>
                            </div>
                            <div className='rel-colmd-half'>
                                <div className="rel-copyright-menu rel-right">
                                    <ul>
                                        <li><a href='google.com' title='about'>Terms &amp; Conditions</a></li>
                                        <li><a href='google.com' title='about'>Claim</a></li>
                                        <li><a href='google.com' title='about'>Privacy &amp; Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
