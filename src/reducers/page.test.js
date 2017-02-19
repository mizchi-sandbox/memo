/* @flow */
import test from 'ava'
import page from './page'

test('Reduce TRANSITION', t => {
  const initialState = { location: 'index', layoutType: 1 }
  const nextState = page(initialState, { type: 'TRANSITION', location: 'edit' })
  t.is(nextState.location, 'edit')
})

test('Reduce SWITCH_LAYOUT', t => {
  const initialState = { location: 'index', layoutType: 1 }
  const nextState = page(initialState, { type: 'SWITCH_LAYOUT', layoutType: 2 })
  t.is(nextState.layoutType, 2)
})
