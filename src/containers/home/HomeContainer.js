/* @flow */
import { connect } from 'react-redux'
import React from 'react'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import type { Dispatcher } from '@i/types'
import Home from './components/Home'
import type {Action, State as HomeState} from './reducers'

type HomeProps = HomeState & Dispatcher<Action>

function HomeContainer ({ dispatch, buffer, layout }: HomeProps) {
  return (
    <Home
      layoutType={layout.layoutType}
      dispatch={dispatch}
      currentBuffer={buffer.buffer}
    />
  )
}

const connector: Connector<{}, HomeProps> = connect(({ home }) => home)

export default connector(HomeContainer)
