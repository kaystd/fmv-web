import { css } from 'styled-components'
import {
  BaseBorderProps,
  BaseColorProps,
  BaseFlexProps,
  BaseGridProps,
  BaseDimensionsProps,
  BaseTextProps
} from './View.types'

export const baseSizes = css<BaseDimensionsProps>`
  ${({ ma }) => ma && `margin: ${ma};`}
  ${({ mh }) => mh && `margin-inline: ${mh};`}
  ${({ mv }) => mv && `margin-block: ${mv};`}
  ${({ mt }) => mt && `margin-top: ${mt};`}
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ ml }) => ml && `margin-left: ${ml};`}
  ${({ mr }) => mr && `margin-right: ${mr};`}

  ${({ pa }) => pa && `padding: ${pa};`}
  ${({ ph }) => ph && `padding-inline: ${ph};`}
  ${({ pv }) => pv && `padding-block: ${pv};`}
  ${({ pt }) => pt && `padding-top: ${pt};`}
  ${({ pb }) => pb && `padding-bottom: ${pb};`}
  ${({ pl }) => pl && `padding-left: ${pl};`}
  ${({ pr }) => pr && `padding-right: ${pr};`}

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}

  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}

  ${({ absolute }) => absolute && 'position: absolute;'}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`

export const baseText = css<BaseTextProps>`
  ${({ fontFamily }) => `font-family: ${fontFamily || 'BankGothic, serif'};`}
  ${({ fontSize }) => `font-size: ${fontSize || '1rem'};`}
  ${({ lineHeight }) => `line-height: ${lineHeight || 1.5};`}
`

export const baseColor = css<BaseColorProps>`
  ${({ color }) => color && `color: ${color};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`

export const baseBorder = css<BaseBorderProps>`
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ borderStyle }) => borderStyle && `border-style: ${borderStyle};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
`

export const baseFlex = css<BaseFlexProps>`
  ${({ flex }) => flex && `display: flex; flex: ${flex};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`}
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`}
`

export const baseGrid = css<BaseGridProps>`
  ${({ grid }) => grid && 'display: grid;'}
  ${({ gridTemplateColumns }) => gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`}
  ${({ gridTemplateRows }) => gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`}
  ${({ gridAutoColumns }) => gridAutoColumns && `grid-auto-columns: ${gridAutoColumns};`}
  ${({ gridAutoRows }) => gridAutoRows && `grid-auto-rows: ${gridAutoRows};`}
  ${({ gridColumnStart }) => gridColumnStart && `grid-column-start: ${gridColumnStart};`}
  ${({ gridColumnEnd }) => gridColumnEnd && `grid-column-end: ${gridColumnEnd};`}
  ${({ gridRowStart }) => gridRowStart && `grid-row-start: ${gridRowStart};`}
  ${({ gridRowEnd }) => gridRowEnd && `grid-row-end: ${gridRowEnd};`}
  ${({ gridGap }) => gridGap && `grid-gap: ${gridGap};`}
  ${({ gridColumnGap }) => gridColumnGap && `grid-column-gap: ${gridColumnGap};`}
  ${({ gridRowGap }) => gridRowGap && `grid-row-gap: ${gridRowGap};`}
`
