/* @flow */
import type { Item } from '@i/types'
import type { Action } from 'types/actions'

const initialItems: Item[] = [
  {
    id: '*scratch*',
    name: '*scratch*',
    selected: true
  },
  {
    id: 'aaa',
    name: 'aaa'
  }
]

export default (items: Item[] = initialItems, action: Action): Item[] => {
  switch (action.type) {
    default:
      return items
  }
}
