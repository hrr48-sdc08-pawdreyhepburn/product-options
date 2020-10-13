import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import {QtyDropdownContent, QtyBtn, BtnText, DropdownArrow} from '../styling/qtyDropdown.jsx';
import QtyNumber from './qtyNumber.jsx';

import whenClickedOutside from '../utils/outsideClick.js'


const QtyDropDown = ({active, toggleClass, closeDropdown, buyQty, handleBuyQtyChange}) => {
  // returns range from 0 to max
  const createRange = (max) => {
    return Array.from(Array(99).keys());
  }

  // use a reference to keep track of clicks on/outside of the component
  const wrapperRef = useRef(null);
  whenClickedOutside(wrapperRef, closeDropdown);


  return (
    <div ref={wrapperRef}>
      <QtyBtn onClick={()=> toggleClass()}>
        <BtnText>{buyQty}</BtnText>
        <DropdownArrow>&#8964;</DropdownArrow>
      </QtyBtn>
      <QtyDropdownContent active={active}>
          {createRange(99).map( (number, i) => <QtyNumber key={i} number={number + 1}
          handleBuyQtyChange={handleBuyQtyChange} closeDropdown={closeDropdown}/>)}
        </QtyDropdownContent>
    </div>
  )
}

export default QtyDropDown;
