import React from 'react';
import { Socialicons } from './Data/ContactData';
export default function Socialmedia() {
  return (
    <>
       <ul className='rel-social__icons'>
          {Socialicons.map((items,index) => {
            return (
              <li key={index}><a href='google.com' title={items.title}>{items.icons}</a></li>
            )
          })}
        </ul> 
    </>
  )
}
