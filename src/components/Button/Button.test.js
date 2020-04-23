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

  it('should render counter display', () => {
    expect(wrapper.find(`[data-test='counter']`).length).toBe(1)
  })

  it('should display 0 as default', () => {
    expect(wrapper.state('counter')).toBe(0)
  })

  it('should increment counter display when clicked on button', () => {
    wrapper.find(`[data-test='button']`).simulate('click')
    expect(wrapper.find(`[data-test='counter']`).text()).toContain(1)
  })

})
