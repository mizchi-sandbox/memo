/* @flow */
export type Action =
  { type: 'UPDATE_BUFFER', buffer: string } |
  { type: 'RESET_BUFFER' } |
  { type: 'CHANGE_BUFFER', selectedItemId: string, buffer: string }

export type State = {
  selectedItemId: string,
  buffer: string
}

type Buffer = State

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
