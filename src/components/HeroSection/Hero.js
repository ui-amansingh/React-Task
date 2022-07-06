import React from 'react';
import "./Hero.css";
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaHome, FaPlay } from 'react-icons/fa';
import Button from '../button/Button';
import imges from '../../assets/img/hero.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderData from '../Data/SliderData';

export default function Hero() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <div><FaArrowLeft/></div>,
        nextArrow: <div><FaArrowRight/></div>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className='rel-hero-slider'>
            <Slider {...settings}>
            {SliderData.map((items,index) => {
              let slideOrder
              let classname
              if(items.id === 2){
                  slideOrder = "order--two"
                  classname ="rel-d--none"
              }
              else{
                 slideOrder = "order--one"
                 classname =""
              }
            return (
                  <>
                    <div key={index} className={`rel-slider__item ${slideOrder}`}>
                        <div className='rel-container'>
                            <div className='rel-flex'>
                                <div className='rel-slider__info rel-colmd-half'>
                                    <p className='rel-slider__subtitle'><FaHome /> {items.subheding}</p>
                                    <h2 className='rel-slider__title'>{items.title}</h2>
                                    <p className='red-slider__description'>{items.description}</p>
                                    <div className='rel-btn__wrap'>
                                        <Button link={items.buttontinks} type="secondary" text={items.buttontext} />
                                        {items.buttontext2!==undefined?<Button link={items.buttontinks2} type="transparent" text={items.buttontext2} />:null }
                                        <a className={`rel-play--btn ${classname}`} href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase"><FaPlay /></a>
                                    </div>
                                </div>
                                <div className='rel-slider__images rel-colmd-half'>
                                    <img src={imges} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                  </>
            )
        })}
            </Slider>
        </div>
        </>
    )
}
