import React from 'react';
import imges from '../../assets/img/about-2.png';
import gallery1 from '../../assets/img/g1.jpg';
import gallery2 from '../../assets/img/g2.jpg';
import gallery3 from '../../assets/img/g3.jpg';
import { TbBed, TbBath, TbCar, TbSquare } from "react-icons/tb";
import './About.css';

export default function Aboutv2() {
  return (
    <>
        <div className='rel-aboutus rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-flex'>
                    <div className='rel-collg-half'>
                        <div className='rel-about__info rel-left--info'>
                            <div className='rel-section-area rel-mb--20'>
                                <h2 className='rel-section__subtitle'>About Us</h2>
                                <h3 className='rel-section__title'>Today Sells Properties</h3>
                                <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                            </div>
                            <ul className="rel__list-item rel-pl--30">
                                <li>Live Music Cocerts at Luviana</li>
                                <li>Our SecretIsland Boat Tour is Just for You</li>
                                <li>Live Music Cocerts at Luviana</li>
                                <li>Live Music Cocerts at Luviana</li>
                            </ul>
                            <ul className="rel__flatlist-item rel-mb--15">
                                <li><span>3 <TbBed /></span>Bedrooms</li>
                                <li><span>2 <TbBath /> </span>Bathrooms</li>
                                <li><span>2 <TbCar /> </span>Car parking</li>
                                <li><span>3450 <TbSquare /></span>square Ft</li>
                            </ul>
                            <ul className="rel__imglist-item rel-mb--15">
                                <li><a href='google.com'><img src={gallery1} alt='' /></a></li>
                                <li><a href='google.com'><img src={gallery2} alt='' /></a></li>
                                <li><a href='google.com'><img src={gallery3} alt='' /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='rel-collg-half rel-self--center'>
                        <div className='rel-about__image rel-right__img'>
                            <img src={imges} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
