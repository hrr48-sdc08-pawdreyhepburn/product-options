import React from 'react';
import ReactDOM from 'react-dom';

import {Flexbox, Flexrow, Flexcol} from '../styling/styles.jsx';
import {EditBtn, PickupBtnDiv, DeliveryNotEligible} from '../styling/storeStyle.jsx';

const StoreDeliveryAvailablity = ({qty, store}) => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Flexrow>
      <Flexbox>
        <Flexcol>
          <div>
          <strong>Same Day Delivery </strong>
          to
          <strong> 61000</strong>
          </div>

          <EditBtn>Edit zip code</EditBtn>
          <DeliveryNotEligible> Not eligible for Same Day Delivery to this address
 </DeliveryNotEligible>
        </Flexcol>
      </Flexbox>
    </Flexrow>
  )
}

export default StoreDeliveryAvailablity;
