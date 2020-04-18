import React from 'react'
import{ shallow } from 'enzyme'
import Headline from './Headline'

describe('Headline', () => {
  
  let wrapper

  describe('Have props', () => {

    beforeEach(() => {
      const props = {
        header: 'test-header',
        text: 'test-text'
      }
      wrapper = shallow(<Headline {...props}/>)
    })

    it('should render correctly', () => {
      expect(wrapper.find(`[data-test='headline-div']`).length).toBe(1)
    })

    it('should render a title', () => {
      expect(wrapper.find(`[data-test='headline-header']`).length).toBe(1)
    })

    it('should render a text', () => {
      expect(wrapper.find(`[data-test='headline-text']`).length).toBe(1)
    })


  })

  describe('Have no props', () => {

    beforeEach(() => {
      wrapper = shallow(<Headline />)
      
    })

    it('should not render headline', () => {
      expect(wrapper.find(`[data-test='headline-div']`).length).toBe(0)
    })

  })
})