/* @flow */
import type { Buffer } from '@i/types'
import type { Action } from 'types/actions'

const initialBuffer: Buffer = {
  selectedItemId: '*scratch*',
  buffer: ''
}

export default (state: Buffer = initialBuffer, action: Action): Buffer => {
  switch (action.type) {
    case 'UPDATE_BUFFER':
      return {selectedItemId: state.selectedItemId, buffer: action.buffer}
    case 'RESET_BUFFER':
      return {selectedItemId: state.selectedItemId, buffer: ''}
    case 'CHANGE_BUFFER':
      return {selectedItemId: action.selectedItemId, buffer: action.buffer}
    default:
      return state
  }
}
