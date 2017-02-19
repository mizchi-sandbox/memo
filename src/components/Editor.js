/* @flow */
import React from 'react'
import styles from './styles.css'

export default function Editor (
  props: {
    onChangeBody: (string) => any
  }
) {
  return <div className={styles.EditorContainer}>
    <div className={styles.EditorWrapper}>
      <textarea
        placeholder="input here"
        className={styles.Editor}
        onChange={(ev: SyntheticInputEvent) => props.onChangeBody(ev.target.value)}
      />
    </div>
  </div>
}
