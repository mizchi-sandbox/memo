/* @flow */
import type { PageState } from '@i/types'
import type { PageAction } from 'types/actions'

const initialState: PageState = {
  location: 'index',
  layoutType: 1
}

export default (state: PageState = initialState, action: PageAction): PageState => {
  switch (action.type) {
    case 'TRANSITION':
      return {
        location: action.location,
        layoutType: state.layoutType
      }
    case 'SWITCH_LAYOUT':
      return {
        location: state.location,
        layoutType: action.layoutType
      }
    default:
      return state
  }
}
