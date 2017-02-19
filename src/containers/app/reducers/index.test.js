/* @flow */
import test from 'ava'
import page from './index'

test('Reduce TRANSITION', t => {
  const initialState = { location: 'home', layoutType: 1 }
  const nextState = page(initialState, { type: 'TRANSITION', location: 'help' })
  t.is(nextState.location, 'help')
})
