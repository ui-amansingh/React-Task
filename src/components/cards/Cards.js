import React, { useState } from 'react';
import CardsData from '../Data/CardsData';
import "./Cards.css";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
export default function Cards() {
    const [active, setactive] = useState([1]);
    const Handleclass=(index)=>{
        setactive(index)
    }
    return (
        <>
        <div className='rel-bg-1 rel-card__area rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-section-area rel-center'>
                    <h2 className='rel-section__subtitle'>Our Services</h2>
                    <h3 className='rel-section__title'>Our Main Focus</h3>
                </div>
                <div className='rel-flex'>
                    {CardsData.map((items,index) => {
                        return (
                            <>
                                <div key={index} className='rel-colmd-4 rel-colsm-half'>
                                    <div onMouseEnter={()=>Handleclass(index)} className={`rel-card rel-border--effect rel-center ${active===index && `rel-card--active`}`}>
                                        <div className='rel-mb--20'>
                                            <img src={items.imgSrc} alt={items.title}/>
                                        </div>
                                        <div className='rel-card__info'>
                                            <h3><a href={items.links} title={items.title}>{items.title}</a></h3>
                                            <p>{items.desc}</p>
                                            <a className='rel-card__link' href={items.links} title='{items.buttontext}'>{items.buttontext}<HiOutlineArrowNarrowRight /></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}
