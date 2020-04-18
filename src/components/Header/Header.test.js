import React from 'react'
import{ shallow } from 'enzyme'
import Header from './Header'


describe('Header', () => {
  let wrapper

  it ('should render component correctly', () => {
    wrapper = shallow(<Header />)
    expect(wrapper.find('.header').length).toBe(1)
  })

  it('should render a title', () => {
    wrapper = shallow(<Header />)
    expect(wrapper.find('.title').length).toBe(1)
  })

})
