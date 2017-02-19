/* @flow */
import React from 'react'
import type { Item as ItemType } from 'types'
// import styles from './styles.css'

export default function Item (
  props: {
    item: ItemType,
    onClick: (ev: SyntheticEvent) => any
  }
) {
  return <div onClick={ev => props.onClick(ev)}>{props.item.name}</div>
}
