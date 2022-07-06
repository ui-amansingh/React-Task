import React from 'react';
import  CategoryData from '../Data/CategoryData';
import './Category.css';
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Category() {
  return (
    <>
        <div className='rel-category-area rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-section-area rel-center'>
                    <h2 className='rel-section__subtitle'>Our Aminities</h2>
                    <h3 className='rel-section__title'>Building Aminities</h3>
                </div>
                <div className='rel-flex'>
                {CategoryData.map((items,index) => {
                    return (
                        <>
                        <div key={index} className='rel-category-col'>
                            <div className='rel-category__item'>
                                <a href='google.com' title=''>
                                    <span className='category-icon'>{items.icon}</span>
                                    <span className='category-title'>{items.title}</span>
                                    <span className='category-btn'><FaLongArrowAltRight /></span>
                                </a>
                            </div>
                        </div>
                        </>
                    )
                })}
                </div>
            </div>
        </div>
    </ >
  )
}
