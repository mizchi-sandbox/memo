/* @flow */
import { combineReducers } from 'redux'
import page from './page'
import items from './items'
import buffer from './buffer'

export default combineReducers({
  page, items, buffer
})
