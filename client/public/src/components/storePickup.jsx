import React from 'react';
import ReactDOM from 'react-dom';

import {PickupFlex, Flexrow, Flexcol} from '../styling/styles.jsx';
import {StockLeft, EditBtn, PickupBtnDiv, Pickuptext, StoreLocationStyle} from '../styling/storeStyle.jsx';

const StorePickup = ({qty, store}) => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Flexrow>
      <PickupFlex>
        <Flexcol>
          <div>
            <Pickuptext qty={qty}>{qty > 0 ? 'Pick up today' : 'Out of stock'} </Pickuptext>
            {''}
            <StoreLocationStyle>{store.location ? capitalize(store.location) : ''} </StoreLocationStyle>
          </div>

          <EditBtn>Edit store</EditBtn>
          <StockLeft> {qty > 0 ? `Only ${qty} Left` : ''} </StockLeft>
        </Flexcol>
      </PickupFlex>

      <PickupBtnDiv><button>Pick up here</button></PickupBtnDiv>
    </Flexrow>
  )
}

export default StorePickup;
