/* @flow */
import React from 'react'
import ItemListContainer from '../containers/ItemListContainer'
import styles from './styles.css'

export default function Layout ({ children }: any) {
  return (
    <div className={styles.Layout}>
      <div className={styles.HeaderContainer}/>
      <div className={styles.ContentContainer}>
        <div className={styles.LeftPane}>
          <div>Memo</div>
          <ItemListContainer/>
        </div>
        <div className={styles.RightPane}>
          {children}
        </div>
      </div>
    </div>
  )
}
