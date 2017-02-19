/* @flow */
import React from 'react'
import autobind from 'autobind-decorator'
// import type { Action } from '@i/types/actions'
import ItemListContainer from '../containers/ItemListContainer'
import styles from './styles.css'

export default class Layout extends React.Component {
  props: {
    children: any, dispatch: any
  };
  // & Dispatcher;

  @autobind
  _onKeyDown (ev: SyntheticKeyboardEvent) {
    if (ev.ctrlKey) {
      switch (ev.keyCode) {
        case 49:
          this.props.dispatch({type: 'SWITCH_LAYOUT', layoutType: 1})
          break
        case 50:
          this.props.dispatch({type: 'SWITCH_LAYOUT', layoutType: 2})
          break
        case 51:
          this.props.dispatch({type: 'SWITCH_LAYOUT', layoutType: 3})
          break
      }
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this._onKeyDown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this._onKeyDown)
  }

  render () {
    return (
      <div className={styles.Layout}>
        <div className={styles.HeaderContainer}/>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftPane}>
            <div>Memo</div>
            <ItemListContainer/>
          </div>
          <div className={styles.RightPane}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
