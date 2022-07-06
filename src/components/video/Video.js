import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Video.css';

export default function Video() {
  return (
    <>
        <div className='rel-video-area rel-section--padding'>
            <div className='rel-video__img'>
                <a className='rel-play--btn' href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase"><FaPlay /> </a>
            </div>
        </div>
    </>
  )
}
