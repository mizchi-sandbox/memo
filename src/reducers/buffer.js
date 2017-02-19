/* @flow */
import type { Buffer } from '@i/types'
import type { Action } from 'types/actions'

const initialBuffer: Buffer = {
  selectedItemId: '*scratch*',
  buffer: ''
}

export default (state: Buffer = initialBuffer, action: Action): Buffer => {
  switch (action.type) {
    default:
      return state
  }
}
