/* @flow */
import { connect } from 'react-redux'
import React from 'react'
import type { Dispatcher, Connector } from '@i/types'
import Home from './components/Home'
import type {Action, State} from './reducers'

function HomeContainer (
  { dispatch, buffer, layout }: State & Dispatcher<Action>
) {
  return (
    <Home
      layoutType={layout.layoutType}
      dispatch={dispatch}
      currentBuffer={buffer.buffer}
    />
  )
}

const connector: Connector<{}, State, Action> = connect(({ home }) => home)

export default connector(HomeContainer)
