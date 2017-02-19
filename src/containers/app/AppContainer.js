/* @flow */
import { connect } from 'react-redux'
import React from 'react'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import HomeContainer from '../home/HomeContainer'
import type { State, Action } from './reducers'

type Props = State & {
  dispatch: Action | Promise<Action>
}

function AppContainer ({location}: Props) {
  let C: any
  switch (location) {
    case 'home':
      C = HomeContainer
      break
    default:
      C = function None () { return <span>error</span> }
  }
  return <C />
}

const connector: Connector<{}, Props> = connect(({ app }) => app)

export default connector(AppContainer)
