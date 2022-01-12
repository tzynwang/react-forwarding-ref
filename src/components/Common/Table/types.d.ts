import React from 'react'

export interface TableHeader {
  label: string
  style: React.CSSProperties
}

export interface DynamicContentTableProps {
  tableHeader: TableHeader[]
  tableRow: unknown[]
  renderRowCol: (h: TableHeader, r: unknown) => React.ReactNode
}
