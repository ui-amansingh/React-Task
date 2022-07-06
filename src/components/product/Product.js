import React from 'react';
import Slider from 'react-slick';
import { TbBed, TbBath, TbCar } from "react-icons/tb";
import { FaAd, FaArrowLeft, FaArrowRight, FaCamera, FaExpand, FaFilm, FaHeart, FaSearchLocation } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
// import SliderData from '../Data/SliderData';

export default function Product() {
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <div><FaArrowLeft/> </div>,
        nextArrow: <div><FaArrowRight/></div>,
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
        <div className='red-product-area rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-section-area rel-center'>
                    <h2 className='rel-section__subtitle'>Properties</h2>
                    <h3 className='rel-section__title'>Featured Listings</h3>
                </div>
                <div className='rel-product-slider'>
                <Slider {...settings}>
                  <div className='rel-product__item'>
                    <div className='rel-product__img'>
                      <a href='google.com' title=''>
                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                      </a>
                      <p className='rel-badge'>For Rent</p>
                      <div className='rel-location__gallery'>
                        <p><FaSearchLocation /> Belmont Gardens, Chicago</p>
                        <ul className='product-img-gallery'>
                          <li><a href='google.com'><FaCamera /> 4</a></li>
                          <li><a href='google.com'><FaFilm /> 2</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='rel-product__info'>
                      <div className="rel-product-price">
                        <span>$34,900<small>/Month</small></span>
                      </div>
                      <h2 className="rel-product--title">New Apartment Nice View</h2>
                      <p>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                      <ul className="rel__flatlist-item rel-mb--15">
                        <li><span>3 <TbBed /></span>Bedrooms</li>
                        <li><span>2 <TbBath /> </span>Bathrooms</li>
                        <li><span>2 <TbCar /> </span>Car parking</li>
                      </ul>
                    </div>
                    <div className='rel-product__footer'>
                      <div className='rel-agent__wrap'>
                        <a className='rel-avtar--img' href='google.com'>
                          <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg' alt='' />
                        </a>
                        <div className='rel-bref'>
                          <h3>
                            <a href='google.com' title=''>William Seklo</a>
                          </h3>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <ul className='rel-icon__list'>
                        <li><a href="google.com" title="Quick View"><FaExpand /></a></li>
                        <li><a href="google.com" title="Wishlist"><FaHeart /></a></li>
                        <li><a href="google.com" title="Product Details"><FaAd /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='rel-product__item'>
                    <div className='rel-product__img'>
                      <a href='google.com' title=''>
                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                      </a>
                      <p className='rel-badge'>For Rent</p>
                      <div className='rel-location__gallery'>
                        <p><FaSearchLocation /> Belmont Gardens, Chicago</p>
                        <ul className='product-img-gallery'>
                          <li><a href='google.com'><FaCamera /> 4</a></li>
                          <li><a href='google.com'><FaFilm /> 2</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='rel-product__info'>
                      <div className="rel-product-price">
                        <span>$34,900<small>/Month</small></span>
                      </div>
                      <h2 className="rel-product--title">New Apartment Nice View</h2>
                      <p>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                      <ul className="rel__flatlist-item rel-mb--15">
                        <li><span>3 <TbBed /></span>Bedrooms</li>
                        <li><span>2 <TbBath /> </span>Bathrooms</li>
                        <li><span>2 <TbCar /> </span>Car parking</li>
                      </ul>
                    </div>
                    <div className='rel-product__footer'>
                      <div className='rel-agent__wrap'>
                        <a className='rel-avtar--img' href='google.com'>
                          <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg' alt='' />
                        </a>
                        <div className='rel-bref'>
                          <h3>
                            <a href='google.com' title=''>William Seklo</a>
                          </h3>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <ul className='rel-icon__list'>
                        <li><a href="google.com" title="Quick View"><FaExpand /></a></li>
                        <li><a href="google.com" title="Wishlist"><FaHeart /></a></li>
                        <li><a href="google.com" title="Product Details"><FaAd /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='rel-product__item'>
                    <div className='rel-product__img'>
                      <a href='google.com' title=''>
                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                      </a>
                      <p className='rel-badge'>For Rent</p>
                      <div className='rel-location__gallery'>
                        <p><FaSearchLocation /> Belmont Gardens, Chicago</p>
                        <ul className='product-img-gallery'>
                          <li><a href='google.com'><FaCamera /> 4</a></li>
                          <li><a href='google.com'><FaFilm /> 2</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='rel-product__info'>
                      <div className="rel-product-price">
                        <span>$34,900<small>/Month</small></span>
                      </div>
                      <h2 className="rel-product--title">New Apartment Nice View</h2>
                      <p>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                      <ul className="rel__flatlist-item rel-mb--15">
                        <li><span>3 <TbBed /></span>Bedrooms</li>
                        <li><span>2 <TbBath /> </span>Bathrooms</li>
                        <li><span>2 <TbCar /> </span>Car parking</li>
                      </ul>
                    </div>
                    <div className='rel-product__footer'>
                      <div className='rel-agent__wrap'>
                        <a className='rel-avtar--img' href='google.com'>
                          <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg' alt='' />
                        </a>
                        <div className='rel-bref'>
                          <h3>
                            <a href='google.com' title=''>William Seklo</a>
                          </h3>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <ul className='rel-icon__list'>
                        <li><a href="google.com" title="Quick View"><FaExpand /></a></li>
                        <li><a href="google.com" title="Wishlist"><FaHeart /></a></li>
                        <li><a href="google.com" title="Product Details"><FaAd /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='rel-product__item'>
                    <div className='rel-product__img'>
                      <a href='google.com' title=''>
                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                      </a>
                      <p className='rel-badge'>For Rent</p>
                      <div className='rel-location__gallery'>
                        <p><FaSearchLocation /> Belmont Gardens, Chicago</p>
                        <ul className='product-img-gallery'>
                          <li><a href='google.com'><FaCamera /> 4</a></li>
                          <li><a href='google.com'><FaFilm /> 2</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='rel-product__info'>
                      <div className="rel-product-price">
                        <span>$34,900<small>/Month</small></span>
                      </div>
                      <h2 className="rel-product--title">New Apartment Nice View</h2>
                      <p>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                      <ul className="rel__flatlist-item rel-mb--15">
                        <li><span>3 <TbBed /></span>Bedrooms</li>
                        <li><span>2 <TbBath /> </span>Bathrooms</li>
                        <li><span>2 <TbCar /> </span>Car parking</li>
                      </ul>
                    </div>
                    <div className='rel-product__footer'>
                      <div className='rel-agent__wrap'>
                        <a className='rel-avtar--img' href='google.com'>
                          <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg' alt='' />
                        </a>
                        <div className='rel-bref'>
                          <h3>
                            <a href='google.com' title=''>William Seklo</a>
                          </h3>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <ul className='rel-icon__list'>
                        <li><a href="google.com" title="Quick View"><FaExpand /></a></li>
                        <li><a href="google.com" title="Wishlist"><FaHeart /></a></li>
                        <li><a href="google.com" title="Product Details"><FaAd /></a></li>
                      </ul>
                    </div>
                  </div>
                </Slider>
                </div>
                
            </div>
        </div>
    </>
  )
}
