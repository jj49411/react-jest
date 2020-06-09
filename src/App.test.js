import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'

import App from './App'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Picture from './components/Picture/Picture'


describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
  })

  it('should render the Button Component', () => {
    expect(wrapper.containsMatchingElement(<Button />)).toEqual(true)
  })

  it('should render the Picture Component', () => {
    expect(wrapper.containsMatchingElement(<Picture />)).toEqual(true)
  })

 
})
