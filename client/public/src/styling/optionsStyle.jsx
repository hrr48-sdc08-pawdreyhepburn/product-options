import styled from 'styled-components';

export const SelectedOption = styled.div`
  font-size: 19px;
  margin-top: 15px;
  margin-bottom: 5px;
  span {
    font-weight: bold;
  }
`;

export const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.19fr);
`;

export const ColorHighlight = styled.div`
  cursor: pointer;
  border: ${props => props.selectedColor ? '2px solid green' : '2px solid white' };
  border-radius: 2px;
  width: 50px;
  height: 50px;
  :hover { border: 2px solid green }
  :active { background-color: rgb(20, 20, 20) }
`;

export const Color = styled.img`
  width: 42px;
  border: 0.5px solid rgb(90, 90, 90);
  border-radius: 2px;
  margin: 3px;
`;

export const SizesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.23fr);
  grid-row-gap: 1.5ch;
  // grid-column-gap: 0.5ch;
`;

export const SizeHighlight = styled.div`

  border-radius: 2px;
  width: 50px;
  height: 25px;
  line-height: 25px;
`;

export const Size = styled.div`
  position: relative;
  width: 63px;
  height: 28px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: ${props => props.selectedSize ? '2px solid rgb(90, 90, 90)' : '2px solid white'};
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
  padding-top: 4px;

  :after {
    ${({sizeQtyLeft}) => sizeQtyLeft > 0 ? '' :
    `content: "";
    position: absolute;
    top: 47%;
    transform: translateY(-50%);
    left: 0px;
    right: 0px;
    height: 1px;
    background: rgb(102, 102, 102);
    width: 80%;
    margin: auto;`
    }
  }

  :active {
    background-color: rgb(51, 51, 51);
  }

  :hover {
    border: ${props => props.selectedSize ? '2px solid green' : ''};
    // background-color: ${props => props.selectedSize ? 'rgb(237, 237, 237)' : ''};
  }

  :before {
    content: " ";
    position: absolute;
    z-index: -1;
    border: ${props => props.selectedSize ? '' : '0.5px solid rgb(90, 90, 90)'};
    border-radius: 3px;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
  }
`;

export const ColorOutOfStock = styled.span`
  width: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 2;
  font-size: 10px;
  text-align: center;
`;