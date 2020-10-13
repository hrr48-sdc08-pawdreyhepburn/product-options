import React from 'react';
import ReactDOM from 'react-dom';

import {RelativePos} from '../styling/styles.jsx'
import {SelectedOption, ColorsGrid, Color, SizesGrid, Size, ColorHighlight, SizeHighlight, ColorOutOfStock} from '../styling/optionsStyle.jsx';

const Options = ({colors, sizes, setActiveColor, setActiveSize, activeColor, activeSize, qty}) => {

  const CheckColorOutOfStock = ({colorTotalQty}) => {
    if (colorTotalQty === 0) {
      return (<ColorOutOfStock>Out of stock</ColorOutOfStock>);
    }
    return null;
  }

  return (
    <div>
      <SelectedOption><span>color</span> {activeColor}</SelectedOption>
      <ColorsGrid>
        {colors.map((color, i) =>
        <ColorHighlight selectedColor={color[0] === activeColor} key={i}
        onClick={() => setActiveColor(color[0])}>

          <RelativePos>
        <Color src={color[1]}></Color>
        <CheckColorOutOfStock colorTotalQty={qty[color[0]].total}></CheckColorOutOfStock>
          </RelativePos>

        </ColorHighlight>
          )}
      </ColorsGrid>

      <SelectedOption><span>size</span> {activeSize}</SelectedOption>
      <SizesGrid>
        {sizes.map((size, i) =>
        <SizeHighlight  key={i}>
          <Size selectedSize={size === activeSize}
            onClick={() => setActiveSize(size)} sizeQtyLeft={qty[activeColor][size]}
            >{size}
          </Size>
        </SizeHighlight>
        )}
      </SizesGrid>

    </div>
  )
}

export default Options;
