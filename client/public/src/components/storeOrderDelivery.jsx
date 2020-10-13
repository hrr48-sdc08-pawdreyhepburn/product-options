import React from 'react';
import ReactDOM from 'react-dom';

import {Flexbox, Flexrow, Flexcol} from '../styling/styles.jsx';
import {StockLeft, EditBtn, PickupBtnDiv, Pickuptext, StoreLocationStyle, DeliveryData, OrderDelivery} from '../styling/storeStyle.jsx';

const StoreOrderDelivery = ({qty, store}) => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <OrderDelivery>
      <Flexrow>
        <Flexbox>
          <Flexcol>
              <div>Deliver to <strong>61000</strong></div>
            <EditBtn>Edit zip code</EditBtn>
          </Flexcol>
        </Flexbox>

        <PickupBtnDiv><button>Ship it</button></PickupBtnDiv>
      </Flexrow>

      <DeliveryData><span>Get it by tomorrow</span> with free standard shipping on $35 orders</DeliveryData>
    </OrderDelivery>
  )
}

export default StoreOrderDelivery;
