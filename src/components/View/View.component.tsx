import styled from 'styled-components'

import { ViewProps } from './View.types'
import { baseBorder, baseColor, baseFlex, baseGrid, baseSizes, baseText } from './View.mixins'

export const View = styled.div<ViewProps>`
  ${baseFlex};
  ${baseGrid};
  ${baseSizes};
  ${baseText};
  ${baseColor};
  ${baseBorder};
`
