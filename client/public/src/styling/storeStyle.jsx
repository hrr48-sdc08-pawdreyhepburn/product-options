import styled from 'styled-components';

export const StockLeft = styled.div`
  margin-top: 5px;
  color: rgb(184, 83, 0);
  font-size: 14px;
`

export const EditBtn = styled.div`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

export const PickupBtnDiv = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  margin-left: 5px;
  button {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 8px;
    padding: 0 4px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(204, 0, 0);
    border-color: rgb(204, 0, 0);
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    margin-left: 5px;
    :hover {
      background-color: rgb(135, 0, 0);
      border-color: rgb(135, 0, 0);
    }
  }
`

export const Pickuptext = styled.span`
  color: ${({qty}) => qty > 0 ? 'rgb(0, 102, 1)' : 'rgb(51, 51, 51)'};
  font-weight: ${({qty}) => qty > 0 ? 'bold' : 'normal'};
`

export const StoreLocationStyle= styled.span`
  font-weight: bold;
  text-decoration: underline;
`

export const DeliveryNotEligible = styled.div`
  color: rgb(102, 102, 102);
  font-size: 14px;
  margin-top: 10px;
`;

export const DeliveryData = styled.div `
margin: 0 15px;
span {
  color: rgb(0, 102, 1);
}
`;

export const OrderDelivery = styled.div `
  background: rgb(247, 247, 247);
  padding-bottom: 15px;
  font-size: 14px;
`;

export const AddToCartStyle = styled.div`
  cursor: pointer;
  margin-top: 20px;
  padding: 0 12px;
  vertical-align: center;
  line-height: 30px;
  color: rgb(51, 51, 51);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 4px;
  img {
    height: 25px;
    width: 25px;
  }
  :hover {
    background-color: rgb(244, 244, 244);
    border-color: rgb(51, 51, 51);
  }
  :active {
    outline: rgb(136, 136, 136) dashed 1px;
    outline-offset: 2px;
    text-decoration: underline;
  }
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(51, 51, 51);
    border-color: rgb(51, 51, 51);
  }
`;

export const AddtoCartText = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;
