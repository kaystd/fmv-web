import React from 'react'
import Enzyme, { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

import { App } from '../App'

describe('App component', () => {
  const wrapper = Enzyme.shallow(<App />)

  it('render 1 <div />', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('render Fast Market View text', () => {
    expect(wrapper.text()).toEqual('Fast Market View')
  })
})
