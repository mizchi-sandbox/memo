/* @flow */
import React from 'react'
import autobind from 'autobind-decorator'
import type {Dispatcher} from '@i/types'
import ItemList from '../../../components/ItemList'
import MarkdownPreview from '../../../components/MarkdownPreview'
import Editor from '../../../components/Editor'
import type {Action} from '../reducers'
import styles from './styles.css'

export default class Home extends React.Component {
  props: {
    layoutType: 1 | 2 | 3,
    currentBuffer: string
  } & Dispatcher<Action>

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
    const { layoutType, dispatch, currentBuffer } = this.props
    return (
      <div className={styles.Home}>
        <div className={styles.HeaderContainer}/>
        <div className={styles.ContentContainer}>
          <div className={styles['LayoutType' + layoutType]}>
            <div className={styles.MenuPane}>
              <div>Memo</div>
              <ItemList items={[]} dispatch={dispatch}/>
            </div>
            <div className={styles.EditPane}>
              <Editor onChangeBody={text => {
                dispatch({type: 'UPDATE_BUFFER', buffer: text})
              }}/>
            </div>
            <div className={styles.PreviewPane}>
              <MarkdownPreview md={currentBuffer}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
