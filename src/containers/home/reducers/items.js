/* @flow */
import type { Item } from '@i/types'

export type Action = {
  type: 'wip'
}
export type State = Item[]

type Items = State

const initialItems: Items = [
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

export default (items: Items = initialItems, action: Action): Items => {
  switch (action.type) {
    default:
      return items
  }
}
