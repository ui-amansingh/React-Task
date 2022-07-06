import React from 'react';
import "./Announcement.css";
import { ContactData } from '../Data/ContactData';
import Socialmedia from '../Socialmedia';
import Button from '../button/Button';

function Announcement() {
  return (
    <div className='rel-announcement'>
        <div className='rel-container'>
            <div className='rel-flex rel-align--center'>
                <div className='rel-colmd-half'>
                    <ul className='rel-announcement__menu'>
                    {ContactData.map((items, index) => {
                        return<>
                        <li key={index}>
                          <a href={`mailto:${items.links}`} title={items.text}>
                            <span>{items.icon}</span>   
                            {items.text}
                          </a>
                        </li>
                        </> 
                    })}
                    </ul>
                </div>
                <div className='rel-colmd-half'>
                  <ul className='rel-right__aria rel-right'>
                    <li>
                      <Socialmedia />
                    </li>
                    <li>
                      <Button 
                      type="listing" 
                      text="Add Listing"/>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Announcement;