/* @flow */
import type {} from 'types'
import type { Action } from 'types/actions'

type Buffer = {
  selectedItemId: ?string,
  buffer: string
}

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
