import styled from 'styled-components'

import { baseBorder, baseColor, baseSizes, baseText } from '../View'
import { BaseBorderProps, BaseColorProps, BaseDimensionsProps, BaseTextProps } from '../View/View.types'
import { colors } from '../../theme/colors'


export interface ButtonProps extends BaseDimensionsProps, BaseTextProps, BaseColorProps, BaseBorderProps {
  borderColorOnFocus?: string;
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  color: props.color || colors.primaryDark,
  backgroundColor: props.backgroundColor || colors.primaryLight,
  borderColor: props.borderColor || colors.primaryDark,
  borderColorOnFocus: props.borderColorOnFocus || colors.absoluteDark,
  borderRadius: props.borderRadius || '0.5rem',
  borderWidth: props.borderWidth || '0.2rem',
  borderStyle: props.borderStyle || 'solid',
  ph: props.ph || '1rem',
  pv: props.pv || '0.5rem',
}))<ButtonProps>`

  ${baseSizes};
  ${baseText};
  ${baseColor};
  ${baseBorder};

  transition-duration: 0.4s;
  cursor: pointer;
  user-select: none;
  text-align: center;
  outline: none;

  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.backgroundColor};
  }

  &:focus {
    border-color: ${props => props.borderColorOnFocus};
  }
`
