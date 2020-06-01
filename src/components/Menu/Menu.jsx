import React from 'react';
import MenuCard from '../menu-card/menu-card';

import './menu.scss';

import { items } from './menu-items.json';


const Menu = () => {
  return (
    <>
      <h2 className="menu-title">
        Pizza
      </h2>

      <div className="menu">
        {
          items
            .filter(item => item.category === 'pizza')
            .map(item => (
              <MenuCard key={item.id} {...item} />
            ))
        }
      </div>

      <h2 className="menu-title">
        Drinks
      </h2>

      <div className="menu">
        {
          items
            .filter(item => item.category === 'drinks')
            .map(item => (
              <MenuCard key={item.id} {...item} />
            ))
        }
      </div>
    </>
  )
}


export default Menu;
