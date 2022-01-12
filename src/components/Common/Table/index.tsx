import React, { memo } from 'react'

import './style.css'
import { DynamicContentTableProps } from './types'

function DynamicContentTable(
  props: DynamicContentTableProps
): React.ReactElement {
  const { tableHeader, tableRow, renderRowCol } = props
  return (
    <React.Fragment>
      <div className="tableHeader">
        {tableHeader.map((h, index) => (
          <div key={index} style={h.style}>
            {h.label}
          </div>
        ))}
      </div>
      <div>
        {tableRow.map((r, index) => (
          <div key={index} className="tableRow">
            {tableHeader.map((h, index) => (
              <div key={index} style={h.style}>
                {renderRowCol(h, r)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default memo(DynamicContentTable)
