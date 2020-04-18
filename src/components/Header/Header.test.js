import React from 'react'
import{ shallow } from 'enzyme'
import Header from './Header'


describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should render component correctly', () => {
    expect(wrapper.find(`[data-test='header']`).length).toBe(1)
  })

  it('should render a title', () => {
    expect(wrapper.find(`[data-test='title']`).length).toBe(1)
  })

})
