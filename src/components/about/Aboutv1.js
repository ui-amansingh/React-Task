import React from 'react';
import { FaHeart, FaHome, FaMountain, FaPlay, FaSquare } from 'react-icons/fa';
import imges from '../../assets/img/about-1.png';
import videoimg from '../../assets/img/about-v.png';
import Button from '../button/Button';
import './About.css';

export default function Aboutv1() {
  return (
    <>
        <div className='rel-aboutus rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-flex'>
                    <div className='rel-collg-half rel-self--center'>
                        <div className='rel-about__image rel-left__img'>
                            <img src={imges} alt='' />
                            <div className='rel-video__img'>
                                <img src={videoimg} alt='' />
                                <a className='rel-play--btn' href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase"><FaPlay /> </a>
                            </div>
                        </div>
                    </div>
                    <div className='rel-collg-half'>
                        <div className='rel-about__info'>
                            <div className='rel-section-area rel-mb--20'>
                                <h2 className='rel-section__subtitle'>About Us</h2>
                                <h3 className='rel-section__title'>The Leading Real Estate Rental Marketplace.</h3>
                                <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                            </div>
                            <ul className="rel__list-item">
                                <li><span><FaHome /></span> Smart Home Design</li>
                                <li><span><FaMountain /></span> Beautiful Scene Around</li>
                                <li><span><FaHeart /></span> Exceptional Lifestyle</li>
                                <li><span><FaSquare /></span>  Complete 24/7 Security</li>
                            </ul>
                            <div className='rel-callout'>
                                <p>
                                    "Enimad minim veniam quis nostrud exercitation <br/> llamco laboris. Lorem ipsum dolor sit amet"
                                </p>
                            </div>
                            <div className='rel-mt--40'>
                                <Button link='google.com' type="secondary" text='OUR SERVICES' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
