import React, { memo, createRef } from 'react'

import Table from './../Common/Table'
import TableContainer from './../Layer/TableContainer'

import { HEADER, ROWS } from './../../mock'

import './style.css'
import { TableHeader, Row } from './types'

enum HEADER_LABEL {
  NAME = 'name',
  CITY = 'city',
  EMAIL = 'email'
}

function App(): React.ReactElement {
  // states
  const tableContainerRef = createRef<HTMLElement>()

  // functions
  const scrollToTop = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
  const renderRowCol = (header: unknown, row: unknown) => {
    const newHeader = header as TableHeader
    const newRow = row as Row
    switch (newHeader.label as HEADER_LABEL) {
      case HEADER_LABEL.NAME:
        return (
          <React.Fragment>
            <button className="btn" onClick={scrollToTop}>
              click to scroll top
            </button>
            {newRow.name}
          </React.Fragment>
        )
      case HEADER_LABEL.CITY:
        return newRow.city
      case HEADER_LABEL.EMAIL:
        return newRow.email
      default:
        return
    }
  }

  // main
  return (
    <TableContainer ref={tableContainerRef}>
      <Table tableHeader={HEADER} tableRow={ROWS} renderRowCol={renderRowCol} />
    </TableContainer>
  )
}

export default memo(App)
