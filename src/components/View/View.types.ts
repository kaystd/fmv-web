export interface ViewProps extends BaseDimensionsProps, BaseTextProps, BaseColorProps, BaseBorderProps, BaseFlexProps, BaseGridProps {}

type BaseSizeUnits = 'px' | 'em' | 'rem' | 'vw' | 'vh'
type GridSizeUnits = BaseSizeUnits | 'fr'

type BaseSize = `${number}${BaseSizeUnits}`
type GridSize = `${number}${BaseSizeUnits}`

type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'


export interface BaseBorderProps {
  borderColor?: string
  borderRadius?: BaseSize
  borderStyle?: BorderStyle
  borderWidth?: BaseSize
}

export interface BaseColorProps {
  color?: string;
  backgroundColor?: string;
}

export interface BaseTextProps {
  fontFamily?: string
  fontSize?: BaseSize
  lineHeight?: number
}

export interface BaseDimensionsProps {
  ma?: BaseSize
  mh?: BaseSize
  mv?: BaseSize
  mt?: BaseSize
  mb?: BaseSize
  ml?: BaseSize
  mr?: BaseSize

  pa?: BaseSize
  ph?: BaseSize
  pv?: BaseSize
  pt?: BaseSize
  pb?: BaseSize
  pl?: BaseSize
  pr?: BaseSize

  width?: BaseSize
  height?: BaseSize

  left?: BaseSize
  right?: BaseSize
  top?: BaseSize
  bottom?: BaseSize

  absolute?: boolean
  zIndex?: number
}

export interface BaseFlexProps {
  flex?: number
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexGrow?: number
  flexShrink?: number
  flexBasis?: BaseSize
}

export interface BaseGridProps {
  grid?: boolean
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridAutoColumns?: string
  gridAutoRows?: string
  gridColumnStart?: string
  gridColumnEnd?: string
  gridRowStart?: string
  gridRowEnd?: string
  gridGap?: BaseSize
  gridColumnGap?: BaseSize
  gridRowGap?: BaseSize
}
