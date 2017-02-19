/* @flow */
export type LayoutType = 1 | 2 | 3
export type Action =
  { type: "SWITCH_LAYOUT", layoutType: LayoutType }

export type State = {
  layoutType: LayoutType
}

type Layout = State

const initialState: Layout = {
  layoutType: 1
}

export default (state: Layout = initialState, action: Action): Layout => {
  switch (action.type) {
    case 'SWITCH_LAYOUT':
      return {
        layoutType: action.layoutType
      }
    default:
      return state
  }
}
