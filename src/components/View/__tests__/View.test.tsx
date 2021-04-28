import React from 'react'
import Enzyme, { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-styled-components'

configure({ adapter: new Adapter() })

import { View } from '../View.component'

describe('View component', () => {

  describe('View component with base size props', () => {
    const component = Enzyme.mount(
      <View
        ma={'10px'}
        mh={'20em'}
        mv={'30rem'}
        ml={'40vw'}
        mr={'50vh'}
        mt={'60px'}
        mb={'70px'}
        pa={'80px'}
        ph={'90px'}
        pv={'100px'}
        pl={'110px'}
        pr={'120px'}
        pt={'130px'}
        pb={'140px'}
        width={'150px'}
        height={'160px'}
        left={'170px'}
        right={'180em'}
        top={'190rem'}
        bottom={'200vh'}
        zIndex={3}
        absolute
      />
    )

    it('render 1 <div />', () => {
      expect(component).toHaveLength(1)
    })

    it('contains 10px margin', () => {
      expect(component).toHaveStyleRule('margin', '10px')
    })

    it('contains 20em margin-inline', () => {
      expect(component).toHaveStyleRule('margin-inline', '20em')
    })

    it('contains 30rem margin-block', () => {
      expect(component).toHaveStyleRule('margin-block', '30rem')
    })

    it('contains 40vw margin-left', () => {
      expect(component).toHaveStyleRule('margin-left', '40vw')
    })

    it('contains 50vh margin-right', () => {
      expect(component).toHaveStyleRule('margin-right', '50vh')
    })

    it('contains 60px margin-top', () => {
      expect(component).toHaveStyleRule('margin-top', '60px')
    })

    it('contains 70px margin-bottom', () => {
      expect(component).toHaveStyleRule('margin-bottom', '70px')
    })

    it('contains 80px padding', () => {
      expect(component).toHaveStyleRule('padding', '80px')
    })

    it('contains 90px padding-inline', () => {
      expect(component).toHaveStyleRule('padding-inline', '90px')
    })

    it('contains 100px padding-block', () => {
      expect(component).toHaveStyleRule('padding-block', '100px')
    })

    it('contains 110px padding-left', () => {
      expect(component).toHaveStyleRule('padding-left', '110px')
    })

    it('contains 120px padding-right', () => {
      expect(component).toHaveStyleRule('padding-right', '120px')
    })

    it('contains 130px padding-top', () => {
      expect(component).toHaveStyleRule('padding-top', '130px')
    })

    it('contains 140px padding-bottom', () => {
      expect(component).toHaveStyleRule('padding-bottom', '140px')
    })

    it('contains 150px width', () => {
      expect(component).toHaveStyleRule('width', '150px')
    })

    it('contains 160px height', () => {
      expect(component).toHaveStyleRule('height', '160px')
    })

    it('contains 170px left', () => {
      expect(component).toHaveStyleRule('left', '170px')
    })

    it('contains 180em right', () => {
      expect(component).toHaveStyleRule('right', '180em')
    })

    it('contains 190rem top', () => {
      expect(component).toHaveStyleRule('top', '190rem')
    })

    it('contains 200vh bottom', () => {
      expect(component).toHaveStyleRule('bottom', '200vh')
    })

    it('contains absolute position', () => {
      expect(component).toHaveStyleRule('position', 'absolute')
    })

    it('contains 3 z-index', () => {
      expect(component).toHaveStyleRule('z-index', '3')
    })

    it('contains default BankGothic, serif font-family', () => {
      expect(component).toHaveStyleRule('font-family', 'BankGothic,serif')
    })

    it('contains default 1rem font-size', () => {
      expect(component).toHaveStyleRule('font-size', '1rem')
    })

    it('contains default 1.5 line-height', () => {
      expect(component).toHaveStyleRule('line-height', '1.5')
    })
  })

  describe('View component with base text props', () => {
    const component = Enzyme.mount(
      <View fontFamily={'Arial, Verdana'} fontSize={'10vh'} lineHeight={4} />
    )

    it('contains Arial, Verdana font-family', () => {
      expect(component).toHaveStyleRule('font-family', 'Arial,Verdana')
    })

    it('contains 10vh font-size', () => {
      expect(component).toHaveStyleRule('font-size', '10vh')
    })

    it('contains 4 line-height', () => {
      expect(component).toHaveStyleRule('line-height', '4')
    })
  })

  describe('View component with base border props', () => {
    const component = Enzyme.mount(
      <View
        color={'red'}
        backgroundColor={'#AABBCC'}
        borderColor={'rgba(0, 0, 0, 0, 0)'}
        borderStyle={'solid'}
        borderRadius={'10px'}
        borderWidth={'2rem'}
      />
    )

    it('contains red color', () => {
      expect(component).toHaveStyleRule('color', 'red')
    })

    it('contains #AABBCC background-color', () => {
      expect(component).toHaveStyleRule('background-color', '#AABBCC')
    })

    it('contains rgba(0,0,0,0,0) border-color', () => {
      expect(component).toHaveStyleRule('border-color', 'rgba(0,0,0,0,0)')
    })

    it('contains solid border-style', () => {
      expect(component).toHaveStyleRule('border-style', 'solid')
    })

    it('contains 10px border-radius', () => {
      expect(component).toHaveStyleRule('border-radius', '10px')
    })

    it('contains 2rem border-width', () => {
      expect(component).toHaveStyleRule('border-width', '2rem')
    })
  })

  describe('View component with base flex props', () => {
    const component = Enzyme.mount(
      <View
        flex={1}
        flexDirection={'column'}
        flexGrow={2}
        flexShrink={4}
        flexBasis={'20px'}
      />
    )

    it('contains flex display', () => {
      expect(component).toHaveStyleRule('display', 'flex')
    })

    it('contains 1 flex', () => {
      expect(component).toHaveStyleRule('flex', '1')
    })

    it('contains column flex-direction', () => {
      expect(component).toHaveStyleRule('flex-direction', 'column')
    })

    it('contains 2 flex-grow', () => {
      expect(component).toHaveStyleRule('flex-grow', '2')
    })

    it('contains 4 flex-shrink', () => {
      expect(component).toHaveStyleRule('flex-shrink', '4')
    })

    it('contains 20px flex-basis', () => {
      expect(component).toHaveStyleRule('flex-basis', '20px')
    })
  })

  describe('View component with base grid props', () => {
    const component = Enzyme.mount(
      <View
        flex={1}
        grid
        gridTemplateColumns={'200px 200px'}
        gridTemplateRows={'repeat(100px, 6)'}
        gridAutoColumns={'150px'}
        gridAutoRows={'100vw'}
        gridColumnStart={'1'}
        gridColumnEnd={'span 3'}
        gridRowStart={'somegridarea'}
        gridRowEnd={'auto'}
        gridGap={'1em'}
        gridColumnGap={'10px'}
        gridRowGap={'1.5vw'}
      />
    )

    it('contains grid display', () => {
      expect(component).toHaveStyleRule('display', 'grid')
    })

    it('contains 200px 200px grid-template-columns', () => {
      expect(component).toHaveStyleRule('grid-template-columns', '200px 200px')
    })

    it('contains repeat(100px, 6) grid-template-rows', () => {
      expect(component).toHaveStyleRule('grid-template-rows', 'repeat(100px,6)')
    })

    it('contains 150px grid-auto-columns', () => {
      expect(component).toHaveStyleRule('grid-auto-columns', '150px')
    })

    it('contains 100vw grid-auto-rows', () => {
      expect(component).toHaveStyleRule('grid-auto-rows', '100vw')
    })

    it('contains 1 grid-column-start', () => {
      expect(component).toHaveStyleRule('grid-column-start', '1')
    })

    it('contains span 3 grid-column-end', () => {
      expect(component).toHaveStyleRule('grid-column-end', 'span 3')
    })

    it('contains somegridarea grid-row-start', () => {
      expect(component).toHaveStyleRule('grid-row-start', 'somegridarea')
    })

    it('contains auto grid-row-end', () => {
      expect(component).toHaveStyleRule('grid-row-end', 'auto')
    })

    it('contains 1em grid-gap', () => {
      expect(component).toHaveStyleRule('grid-gap', '1em')
    })

    it('contains 10px grid-column-gap', () => {
      expect(component).toHaveStyleRule('grid-column-gap', '10px')
    })

    it('contains 1.5vw grid-row-gap', () => {
      expect(component).toHaveStyleRule('grid-row-gap', '1.5vw')
    })
  })
})
