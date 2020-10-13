import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    color: rgb(54, 54, 54);
  }
`;

export const ProductOptionsStyling = styled.div`
  font-family: Arial, sans-serif;
  color: rgb(54, 54, 54);
`;

export const Price = styled.h2`
  font-weight: bold;
  margin: 10px 0;
  font-size: 29px;
`;

export const CenterTextBox = styled.div`
  text-align: center;
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row wrap;
  font-size: 16px;
  min-width: 50%;
`;

export const PickupFlex = styled(Flexbox)`
  width: min-content;
`;

export const AddtoCartFlex = styled(Flexbox)`
  justify-content: center;
  align-items: center;
`;

export const Flexcol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Flexrow = styled.div`
  display: flex;
  background: rgb(247, 247, 247);
  margin-bottom: 12px;
  padding: 12px 16px;
`;

export const Column = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 304px;
`;

export const RelativePos = styled.div`
  position: relative;
`;