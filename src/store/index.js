/* @flow */
import promiseMiddleware from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'
import type { Store } from '@i/types'
import reducer from '../reducers'

const store: Store = createStore(reducer, applyMiddleware(promiseMiddleware))

export default store
