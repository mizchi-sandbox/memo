/* @flow */
import type { PageState } from '@i/types'
import type { Action } from 'types/actions'

const initialState: PageState = {
  location: 'index'
}

export default (state: PageState = initialState, action: Action): PageState => {
  switch (action.type) {
    case 'TRANSITION':
      return {...state, location: action.location}
    default:
      return state
  }
}
