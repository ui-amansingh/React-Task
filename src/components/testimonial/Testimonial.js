import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import TestimonialData from '../Data/TestimonialData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Testimonial.css';
import Slider from 'react-slick';

export default function Testimonial() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <div><FaArrowLeft /></div>,
        nextArrow: <div><FaArrowRight /></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade: true,
                    draggable: true,
                    speed: 900,
                    infinite: true,
                    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                    touchThreshold: 100,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="rel-testimonial rel-section--padding">
                <div className="rel-container">
                    <div className='rel-section-area rel-center'>
                        <h2 className='rel-section__subtitle'>Our Testimonial</h2>
                        <h3 className='rel-section__title'>Clients Feedback</h3>
                    </div>
                    <div className="rel-testimonial-wrap">
                        <Slider {...settings}>
                            {TestimonialData.map((items, index) => {
                                return (
                                    <>
                                        <div key={index} className="rel-testimonial__item rel-border--effect">
                                            <p><RiDoubleQuotesL /> {items.desc}</p>
                                            <div className='rel-agent__wrap'>
                                                <a className='rel-avtar--img' href='google.com' title={items.title}>
                                                    <img src={items.img} alt='' />
                                                </a>
                                                <div className='rel-bref'>
                                                    <h3>
                                                        <a href='google.com' title={items.title}>{items.title}</a>
                                                    </h3>
                                                    <small>{items.degi}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
