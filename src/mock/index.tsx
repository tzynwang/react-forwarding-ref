import faker from 'faker'

import { TableHeader } from './../components/Common/Table/types'
import { Row } from './types'

export const HEADER: TableHeader[] = [
  { label: 'name', style: { flex: '1 1 auto', paddingLeft: '1rem' } },
  { label: 'city', style: { flex: '0 0 20vw' } },
  { label: 'email', style: { flex: '0 0 40vw' } }
]

export const ROWS: Row[] = Array.from({ length: 30 }, () => ({
  name: faker.name.firstName(),
  city: faker.address.city(),
  email: faker.internet.email()
}))
