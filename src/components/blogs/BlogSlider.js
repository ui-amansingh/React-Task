import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaCalendar, FaTags, FaUser } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogSlider.css";

export default function BlogSlider() {
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <div><FaArrowLeft /> </div>,
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
            <div className="rel-bolgs rel-section--padding rel-pt--0">
                <div className="rel-container">
                    <div className='rel-section-area rel-center'>
                        <h2 className='rel-section__subtitle'>News & Blogs</h2>
                        <h3 className='rel-section__title'>Leatest News Feeds</h3>
                    </div>
                    <div className="rel-blogs__wrap">
                        <Slider {...settings}>
                            <div className='rel-product__item rel-mb--50'>
                                <div className='rel-product__img'>
                                    <a href='google.com' title=''>
                                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                                    </a>
                                </div>
                                <div className='rel-product__info'>
                                    <ul className='rel-blog-meta'>
                                        <li className="rel-blog-author">
                                            <a href="google.com"><FaUser /> by: Admin</a>
                                        </li>
                                        <li className="rel-blog-tags">
                                            <a href="google.com"><FaTags /> Interior</a>
                                            <a href="google.com"><FaTags /> Decorate</a>
                                        </li>
                                    </ul>
                                    <h2 className="rel-product--title">New Apartment Nice View</h2>
                                    <div className='rel-product__footer rel-plr--0'>
                                        <ul>
                                            <li className="rel-blog-date"><FaCalendar /> June 24, 2021</li>
                                        </ul>
                                        <div className="rel-blog-btn"><a href="google.com" title='Read our Blogs Data'>Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='rel-product__item rel-mb--50'>
                                <div className='rel-product__img'>
                                    <a href='google.com' title=''>
                                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                                    </a>
                                </div>
                                <div className='rel-product__info'>
                                    <ul className='rel-blog-meta'>
                                        <li className="rel-blog-author">
                                            <a href="google.com"><FaUser /> by: Admin</a>
                                        </li>
                                        <li className="rel-blog-tags">
                                            <a href="google.com"><FaTags /> Interior</a>
                                            <a href="google.com"><FaTags /> Decorate</a>
                                        </li>
                                    </ul>
                                    <h2 className="rel-product--title">New Apartment Nice View</h2>
                                    <div className='rel-product__footer rel-plr--0'>
                                        <ul>
                                            <li className="rel-blog-date"><FaCalendar /> June 24, 2021</li>
                                        </ul>
                                        <div className="rel-blog-btn"><a href="google.com" title='Read our Blogs Data'>Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='rel-product__item rel-mb--50'>
                                <div className='rel-product__img'>
                                    <a href='google.com' title=''>
                                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                                    </a>
                                </div>
                                <div className='rel-product__info'>
                                    <ul className='rel-blog-meta'>
                                        <li className="rel-blog-author">
                                            <a href="google.com"><FaUser /> by: Admin</a>
                                        </li>
                                        <li className="rel-blog-tags">
                                            <a href="google.com"><FaTags /> Interior</a>
                                            <a href="google.com"><FaTags /> Decorate</a>
                                        </li>
                                    </ul>
                                    <h2 className="rel-product--title">New Apartment Nice View</h2>
                                    <div className='rel-product__footer rel-plr--0'>
                                        <ul>
                                            <li className="rel-blog-date"><FaCalendar /> June 24, 2021</li>
                                        </ul>
                                        <div className="rel-blog-btn"><a href="google.com" title='Read our Blogs Data'>Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='rel-product__item rel-mb--50'>
                                <div className='rel-product__img'>
                                    <a href='google.com' title=''>
                                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                                    </a>
                                </div>
                                <div className='rel-product__info'>
                                    <ul className='rel-blog-meta'>
                                        <li className="rel-blog-author">
                                            <a href="google.com"><FaUser /> by: Admin</a>
                                        </li>
                                        <li className="rel-blog-tags">
                                            <a href="google.com"><FaTags /> Interior</a>
                                            <a href="google.com"><FaTags /> Decorate</a>
                                        </li>
                                    </ul>
                                    <h2 className="rel-product--title">New Apartment Nice View</h2>
                                    <div className='rel-product__footer rel-plr--0'>
                                        <ul>
                                            <li className="rel-blog-date"><FaCalendar /> June 24, 2021</li>
                                        </ul>
                                        <div className="rel-blog-btn"><a href="google.com" title='Read our Blogs Data'>Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='rel-product__item rel-mb--50'>
                                <div className='rel-product__img'>
                                    <a href='google.com' title=''>
                                        <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg' alt='' />
                                    </a>
                                </div>
                                <div className='rel-product__info'>
                                    <ul className='rel-blog-meta'>
                                        <li className="rel-blog-author">
                                            <a href="google.com"><FaUser /> by: Admin</a>
                                        </li>
                                        <li className="rel-blog-tags">
                                            <a href="google.com"><FaTags /> Interior</a>
                                            <a href="google.com"><FaTags /> Decorate</a>
                                        </li>
                                    </ul>
                                    <h2 className="rel-product--title">New Apartment Nice View</h2>
                                    <div className='rel-product__footer rel-plr--0'>
                                        <ul>
                                            <li className="rel-blog-date"><FaCalendar /> June 24, 2021</li>
                                        </ul>
                                        <div className="rel-blog-btn"><a href="google.com" title='Read our Blogs Data'>Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
