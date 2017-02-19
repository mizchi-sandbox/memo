/* @flow */
import { combineReducers } from 'redux'
import items from './items'
import buffer from './buffer'
import layout from './layout'
import type {State as Buffer, Action as BufferAction} from './buffer'
import type {State as Items, Action as ItemsAction} from './items'
import type {State as Layout, Action as LayoutAction} from './layout'

export type Action = BufferAction | ItemsAction | LayoutAction

export type State = {
  buffer: Buffer,
  items: Items,
  layout: Layout
}
const reducer = combineReducers({
  buffer, items, layout
})
export default reducer
