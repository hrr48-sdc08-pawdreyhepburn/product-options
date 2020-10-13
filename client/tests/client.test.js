import {shallow, mount, configure} from 'enzyme';
import {render, screen} from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from '../public/src/components/app.jsx'
import Options from '../public/src/components/options.jsx'
import Store from '../public/src/components/store.jsx'
import Details from '../public/src/components/details.jsx'

configure({ adapter: new Adapter() });

describe('test environment should be set up correctly', () => {
  test('should always pass', () => {
    expect(true).toBe(true);
  })
})

describe('App should have the correct components rendering', () => {
  let wrapper = shallow(<App />);
  test('App should have an options component', () => {
    expect(wrapper.children().find('Options').exists()).toBe(true);
  })
  test('App should have an details component', () => {
    expect(wrapper.children().find('Details').exists()).toBe(true);
  })
  test('App should have an store component', () => {
    expect(wrapper.children().find('Store').exists()).toBe(true);
  })
})

describe('Options should contain the correct elements', () => {
  let colors = [
    ['White', 'url'],
    ['Red', 'url']
  ]

  let qty = {
    White: {"total":13,"S":3,"M":2,"L":1,"XL":1,"XXL":2,"2XL":4},
    Red: {"total":0,"S":0,"M":0,"L":0,"XL":0,"XXL":0,"2XL":0}
  }

  let activeColor = 'White';
  let activeSize = 'S';


  let sizes = ['S', 'M', 'L'];

  debugger;
  let wrapper = shallow(<Options qty={qty} colors={colors} sizes={sizes} activeColor={activeColor} activeSize={activeSize}/>);
  xtest('Options should have an element with a class name of colorsGrid', () => {
    expect(wrapper.children().someWhere(n => n.hasClass('ColorsGrid'))).toBe(true);
  })
  xtest('Options should have an element with a class name of sizesGrid', () => {
    expect(wrapper.children().someWhere(n => n.hasClass('SizesGrid'))).toBe(true);
  })
})

describe('Store should contain the correct elements', () => {
  let store = {id: 1, location: 'somewhere'};
  let qty = 10;
  let wrapper = shallow(<Store store={store} qty={qty}/>);
  xtest('Store should have an element with a class name of storeLocation', () => {
    expect(wrapper.children().someWhere(n => n.hasClass('storeLocation'))).toBe(true);
  })
  xtest('Store should have an element with a class name of qty', () => {
    expect(wrapper.children().someWhere(n => n.hasClass('qty'))).toBe(true);
  })
})

describe('Details should contain the correct elements', () => {
  let product = {id: 4, name: 'test item', reviews: 4.83, reviewCount: 59};
  let wrapper = shallow(<Details product={product} />);
  xtest('Details should contain three p elements', () => {
    expect(wrapper.getElements('p')[0].props.children.length).toBe(3);
  })
})

describe('App hooks work as expected', () => {
  test ('check test is working', () => {
    expect(2).toBe(2);
  })
})
