import React from 'react';
import './Counter.css'
import { TbPageBreak } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import CountUp from 'react-countup';

export default function Counter() {
  return (
    <>
        <div className='rel-bg-1 rel-section--padding'>
            <div className='rel-container'>
                <div className='rel-flex'>
                    <div className='rel-colmd-3 rel-col-half rel-mb--15 rel-mb--15'>
                        <div className='rel-counter__item rel-center'>
                            <div className='rel-count--icon'><TbPageBreak /></div>
                            <h2><span className="counter"><CountUp end={560} duration={7}/></span><span className="counterUp-icon">+</span> </h2>
			                <h3>Total Area Sq</h3>
                        </div>
                    </div>
                    <div className='rel-colmd-3 rel-col-half rel-mb--15 rel-mb--15'>
                        <div className='rel-counter__item rel-center'>
                            <div className='rel-count--icon'><HiOutlineOfficeBuilding /></div>
                            <h2><span className="counter"><CountUp end={197} duration={7}/></span><span className="counterUp-icon">K+</span> </h2>
			                <h3>Total Area Sq</h3>
                        </div>
                    </div>
                    <div className='rel-colmd-3 rel-col-half rel-mb--15 rel-mb--15'>
                        <div className='rel-counter__item rel-center'>
                            <div className='rel-count--icon'><GiFoodTruck /></div>
                            <h2><span className="counter"><CountUp end={268} duration={7}/></span><span className="counterUp-icon">+</span> </h2>
			                <h3>Total Area Sq</h3>
                        </div>
                    </div>
                    <div className='rel-colmd-3 rel-col-half rel-mb--15 rel-mb--15'>
                        <div className='rel-counter__item rel-center'>
                            <div className='rel-count--icon'><MdOutlineChair /></div>
                            <h2><span className="counter"><CountUp end={340} duration={7}/></span><span className="counterUp-icon">+</span> </h2>
			                <h3>Total Area Sq</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
