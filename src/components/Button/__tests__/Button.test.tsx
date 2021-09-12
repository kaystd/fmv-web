import React from 'react'
import Enzyme, { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-styled-components'

import { Button } from '../Button.component'
import { colors } from '../../../theme/colors'

configure({ adapter: new Adapter() })

describe('Button component', () => {

  describe('Button component with default props', () => {
    const component = Enzyme.mount(
      <Button />
    )

    it('render 1 <Button />', () => {
      expect(component).toHaveLength(1)
    })

    it('contains primaryDark color', () => {
      expect(component).toHaveStyleRule('color', colors.primaryDark)
    })

    it('contains primaryLight background-color', () => {
      expect(component).toHaveStyleRule('background-color', colors.primaryLight)
    })

    it('contains primaryDark border-color', () => {
      expect(component).toHaveStyleRule('border-color', colors.primaryDark)
    })

    it('contains absoluteDark border-color on focus', () => {
      expect(component).toHaveStyleRule('border-color', colors.absoluteDark, { modifier: ':focus' })
    })

    it('contains primaryDark background-color on hover', () => {
      expect(component).toHaveStyleRule('background-color', colors.primaryDark, { modifier: ':hover' })
    })

    it('contains primaryLight color on hover', () => {
      expect(component).toHaveStyleRule('color', colors.primaryLight, { modifier: ':hover' })
    })

    it('contains 0.5rem border-radius', () => {
      expect(component).toHaveStyleRule('border-radius', '0.5rem')
    })

    it('contains 0.2rem border-width', () => {
      expect(component).toHaveStyleRule('border-width', '0.2rem')
    })

    it('contains solid border-style', () => {
      expect(component).toHaveStyleRule('border-style', 'solid')
    })

    it('contains 1rem padding-inline', () => {
      expect(component).toHaveStyleRule('padding-inline', '1rem')
    })

    it('contains 0.5rem padding-block', () => {
      expect(component).toHaveStyleRule('padding-block', '0.5rem')
    })

    it('contains 0.4s transition-duration', () => {
      expect(component).toHaveStyleRule('transition-duration', '0.4s')
    })

    it('contains 0.4s transition-duration', () => {
      expect(component).toHaveStyleRule('transition-duration', '0.4s')
    })

    it('contains pointer cursor', () => {
      expect(component).toHaveStyleRule('cursor', 'pointer')
    })

    it('contains none user-select', () => {
      expect(component).toHaveStyleRule('user-select', 'none')
    })

    it('contains center text-align', () => {
      expect(component).toHaveStyleRule('text-align', 'center')
    })

    it('contains none outline', () => {
      expect(component).toHaveStyleRule('outline', 'none')
    })
  })

  describe('Button component with specified props', () => {
    const component = Enzyme.mount(
      <Button
        color={'red'}
        backgroundColor={'#555555'}
        borderColor={'rgba(125, 125, 125, 0.5)'}
        borderColorOnFocus={'rgb(125, 125, 125)'}
        borderRadius={'5px'}
        borderWidth={'1vh'}
        borderStyle={'dashed'}
        ph={'2vw'}
        pv={'3em'}
      />
    )

    it('contains red color', () => {
      expect(component).toHaveStyleRule('color', 'red')
    })

    it('contains #555555 background-color', () => {
      expect(component).toHaveStyleRule('background-color', '#555555')
    })

    it('contains rgba(125,125,125,0.5) border-color', () => {
      expect(component).toHaveStyleRule('border-color', 'rgba(125,125,125,0.5)')
    })

    it('contains rgb(125,125,125) border-color on focus', () => {
      expect(component).toHaveStyleRule('border-color', 'rgb(125,125,125)', { modifier: ':focus' })
    })

    it('contains red background-color on hover', () => {
      expect(component).toHaveStyleRule('background-color', 'red', { modifier: ':hover' })
    })

    it('contains #555555 color on hover', () => {
      expect(component).toHaveStyleRule('color', '#555555', { modifier: ':hover' })
    })

    it('contains 5px border-radius', () => {
      expect(component).toHaveStyleRule('border-radius', '5px')
    })

    it('contains 1vh border-width', () => {
      expect(component).toHaveStyleRule('border-width', '1vh')
    })

    it('contains dashed border-style', () => {
      expect(component).toHaveStyleRule('border-style', 'dashed')
    })

    it('contains 2vw padding-inline', () => {
      expect(component).toHaveStyleRule('padding-inline', '2vw')
    })

    it('contains 3em padding-block', () => {
      expect(component).toHaveStyleRule('padding-block', '3em')
    })
  })
})
