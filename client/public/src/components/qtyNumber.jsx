import React from 'react';
import ReactDOM from 'react-dom';

import {DropdownNumber} from '../styling/qtyDropdown.jsx';

const QtyNumber = ({number, handleBuyQtyChange, closeDropdown}) => {
  return (
    <DropdownNumber onClick={()=> { handleBuyQtyChange(number); closeDropdown(); }}>
      {number}
    </DropdownNumber>
  )
}

export default QtyNumber;
