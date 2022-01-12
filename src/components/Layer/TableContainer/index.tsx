import React, { memo, forwardRef } from 'react'
import { TableContainerProps } from './types'

import './style.css'

const TableContainer = forwardRef(
  (
    props: TableContainerProps,
    ref: React.ForwardedRef<HTMLElement>
  ): React.ReactElement => {
    const { children } = props
    return (
      <section ref={ref} className="tableContainer">
        {children}
      </section>
    )
  }
)

export default memo(TableContainer)
