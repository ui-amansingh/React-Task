import React from 'react';
import "./CallToAction.css";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function CallToAction() {
  return (
    <>
        <div className='rel-call_toaction'>
            <div className='rel-container'>
                <div className='rel-call-toaction__inner'>
                    <div className="rel-action__info">
                        <h2>Looking for a dream home?</h2>
                        <p>We can help you realize your dream of a new home</p>
                    </div>
                    <div className='rel-btn__wrapper'>
                        <a className='rel-global--btn rel-btn--transparent' href='google.com' title='Explore Properties'>Explore Properties <HiOutlineArrowNarrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
