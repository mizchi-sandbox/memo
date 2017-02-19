/* @flow */
export type LocationType = 'home' | 'help'

export type Action =
  {
    type: 'TRANSITION',
    location: LocationType
  }

export type State = {
  location: LocationType
}

const initialState: State = {
  location: 'home'
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'TRANSITION':
      return {
        location: action.location
      }
    default:
      return state
  }
}
