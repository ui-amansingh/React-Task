import React from 'react';
import NavbarData from '../Data/NavbarData';

export default function Navbar() {
  return (
    <ul className='rel-header__menu'>
        {NavbarData.map((items,index) => {
            return (
                <li key={index}><a href={items.links} title={items.text}>{items.text}</a></li>
            )
        })}
    </ul>
  )
}
