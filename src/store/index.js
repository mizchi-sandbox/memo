/* @flow */
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import type { Store } from '@i/types'
import reducer from '../reducers'

const store: Store = createStore(reducer, applyMiddleware(promiseMiddleware, createLogger()))

export default store
