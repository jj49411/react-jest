import React from 'react'
import{ shallow } from 'enzyme'
import Picture from './Picture'


describe('Picture', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Picture />)
  })

  it('should render component correctly', () => {
    expect(wrapper.find(`[data-test='Picture-div']`).length).toBe(1)
  })


})
