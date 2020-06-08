import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'

import App from './App'
import Header from './components/Header/Header'


describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
  })

 
})
