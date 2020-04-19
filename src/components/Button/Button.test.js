import React from 'react'
import{ shallow } from 'enzyme'
import Button from './Button'


describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it('should render component correctly', () => {
    expect(wrapper.find(`[data-test='button-component']`).length).toBe(1)
  })

  it('should render increment button', () => {
    expect(wrapper.find(`[data-test='button']`).length).toBe(1)
  })


})
