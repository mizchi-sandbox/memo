/* @flow */
import React from 'react'
import type { Item as ItemType } from '@i/types'
// import styles from './styles.css'

export default function Item (
  props: {
    item: ItemType,
    onClick: (SyntheticEvent) => any
  }
) {
  return <div onClick={ev => props.onClick(ev)}>{props.item.name}</div>
}
