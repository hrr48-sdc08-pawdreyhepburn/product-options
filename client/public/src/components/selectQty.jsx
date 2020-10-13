import React, { useState, useEffect, useRef } from 'react';

import ReactDOM from 'react-dom';

import QtyDropDown from './qtyDropDown.jsx';

import {SelectQtyContainer, SelectQtyTitle} from '../styling/qtyDropdown.jsx';


const SelectQty = ({buyQty, handleBuyQtyChange}) => {

  const [dropdownState, setDropDownState] = useState({active: false});

  const toggleClass = () => {
    var newState = !dropdownState.active;
    setDropDownState({active: newState});
  }

  const closeDropdown = () => {
    setDropDownState({active: false});
  }

  useEffect( () => {}, [dropdownState]);

  return (
    <SelectQtyContainer>
      <SelectQtyTitle>Quantity</SelectQtyTitle>
      <QtyDropDown active={dropdownState.active} toggleClass={toggleClass}
       closeDropdown= {closeDropdown} buyQty={buyQty} handleBuyQtyChange={handleBuyQtyChange}/>
    </SelectQtyContainer>
  )
}

export default SelectQty;
